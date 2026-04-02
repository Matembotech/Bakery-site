"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown, Cookie, Cake } from "lucide-react";

const FRAME_COUNT = 224;

// Bakery-themed welcome messages that rotate during loading
const WELCOME_MESSAGES = [
  "Welcome to Jeje Bakery...",
  "Freshly baked moments coming right up!",
  "Our ovens are working hard for you...",
  "Kneading some patience, just for you!",
  "Whipping up something sweet...",
  "Sifting through the best ingredients...",
  "Almost as sweet as you'll look with our cakes!",
  "Baking happiness, one layer at a time...",
  "Your sweet desires are our priority!",
  "Just a sprinkle more of loading magic...",
];

export default function Hero() {
  const [loadedImages, setLoadedImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  // Memoized images array to prevent unnecessary re-renders of the array ref
  const images = useMemo(() => {
    if (typeof window === "undefined") return [];
    const imgArray: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const indexStr = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${indexStr}.jpg`;
      imgArray.push(img);
    }
    return imgArray;
  }, []);

  // Rotate welcome messages while loading
  useEffect(() => {
    if (!isLoading) return;

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % WELCOME_MESSAGES.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(messageInterval);
  }, [isLoading]);

  useEffect(() => {
    let loadedCount = 0;
    let hasFailed = false;

    // Handle case where some images might fail to load but we shouldn't block the site forever
    const checkComplete = () => {
      loadedCount++;
      setLoadedImages(loadedCount);
      if (loadedCount === FRAME_COUNT) {
        // Tiny delay just to ensure the loading bar visually reaches 100%
        setTimeout(() => setIsLoading(false), 200);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkComplete();
      } else {
        img.onload = checkComplete;
        img.onerror = () => {
          // If an image fails to load, still increment so we don't get stuck
          if (!hasFailed) {
            console.warn(`Failed to track load for image ${img.src}`);
          }
          hasFailed = true;
          checkComplete();
        };
      }
    });
  }, [images]);

  // Scroll logic
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (images.length === 0 || isLoading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let latestFrame = 0;

    const render = () => {
      const img = images[latestFrame];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const rect =
        canvas.parentElement?.getBoundingClientRect() ||
        canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      // Reduce canvas resolution slightly for smaller devices to improve performance
      const optimalDpr = window.innerWidth < 768 ? 1 : Math.min(dpr, 2);

      const rw = rect.width * optimalDpr;
      const rh = rect.height * optimalDpr;

      if (canvas.width !== rw || canvas.height !== rh) {
        canvas.width = rw;
        canvas.height = rh;
      }

      // Fill background to perfectly match the sequence's white background
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Object fit contain scaling logic
      // We reduce the scale multiplier on larger screens so the full cake is visibly smaller, avoiding edge clipping or header overlaps.
      const scaleMultiplier = window.innerWidth >= 1024 ? 0.75 : 0.95;
      const scale = Math.min(rw / img.width, rh / img.height) * scaleMultiplier;

      const w = img.width * scale;
      const h = img.height * scale;

      // Shift down slightly on large screens to account for the fixed header
      const yOffset = window.innerWidth >= 1024 ? 40 * optimalDpr : 0;

      const x = (rw - w) / 2;
      const y = (rh - h) / 2 + yOffset;

      ctx.drawImage(img, x, y, w, h);
    };

    const unsubscribe = frameIndex.on("change", (latest) => {
      latestFrame = Math.floor(latest);
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    });

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", handleResize);

    // Initial draw
    render();

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [images, isLoading, frameIndex]);

  // Storytelling scroll mappings using requirements
  // Opacity: [start, start + 0.1, end - 0.1, end] -> [0, 1, 1, 0]
  // Y Offset: [start, start + 0.1, end - 0.1, end] -> [20, 0, 0, -20]

  // Beat A: 0.0 to 0.20
  const opacityA = useTransform(
    smoothProgress,
    [0, 0.1, 0.1, 0.2],
    [0, 1, 1, 0],
  );
  const yA = useTransform(smoothProgress, [0, 0.1, 0.1, 0.2], [20, 0, 0, -20]);

  // Beat B: 0.25 to 0.45
  const opacityB = useTransform(
    smoothProgress,
    [0.25, 0.35, 0.35, 0.45],
    [0, 1, 1, 0],
  );
  const yB = useTransform(
    smoothProgress,
    [0.25, 0.35, 0.35, 0.45],
    [20, 0, 0, -20],
  );

  // Beat C: 0.50 to 0.70
  const opacityC = useTransform(
    smoothProgress,
    [0.5, 0.6, 0.6, 0.7],
    [0, 1, 1, 0],
  );
  const yC = useTransform(
    smoothProgress,
    [0.5, 0.6, 0.6, 0.7],
    [20, 0, 0, -20],
  );

  // Beat D: 0.75 to 0.95
  const opacityD = useTransform(
    smoothProgress,
    [0.75, 0.85, 0.85, 0.95],
    [0, 1, 1, 0],
  );
  const yD = useTransform(
    smoothProgress,
    [0.75, 0.85, 0.85, 0.95],
    [20, 0, 0, -20],
  );

  // Indicator
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-soft"
          >
            {/* Decorative bakery icons */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Cookie size={40} className="text-brand-pink" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <Cake size={48} className="text-accent-gold" />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Cookie size={40} className="text-brand-pink" />
              </motion.div>
            </div>

            {/* Rotating welcome messages */}
            <motion.div
              key={messageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="font-heading text-neutral-heading text-xl md:text-2xl text-center font-semibold tracking-tight">
                {WELCOME_MESSAGES[messageIndex]}
              </h2>
            </motion.div>

            <div className="w-64 max-w-[80vw] h-2 bg-brand-pink/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-pink transition-all duration-150 ease-out"
                style={{ width: `${(loadedImages / FRAME_COUNT) * 100}%` }}
              />
            </div>
            <div className="mt-4 font-sans text-neutral-heading opacity-70 font-medium">
              {Math.round((loadedImages / FRAME_COUNT) * 100)}%
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={containerRef} className="relative w-full h-[600vh] bg-white">
        <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-white">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              backgroundColor: "#FFFFFF",
              opacity: isLoading ? 0 : 1,
              transition: "opacity 0.8s ease-in-out",
            }}
          />

          <div className="absolute inset-0 z-10 max-w-[1200px] mx-auto w-full h-full relative">
            {/* Beat A */}
            <motion.div
              style={{ opacity: opacityA, y: yA }}
              className="absolute inset-x-0 inset-y-24 md:inset-0 flex flex-col items-center justify-start md:justify-center p-6 md:p-8 pointer-events-none text-center"
            >
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-neutral-heading font-bold mb-6 tracking-tight drop-shadow-md">
                Jeje{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-accent-gold italic">
                  Cake
                </span>{" "}
                Bakery
              </h1>
              <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-heading max-w-[90%] md:max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
                Crafting exceptional cakes and sweet memories with every slice.
              </p>
            </motion.div>

            {/* Beat B */}
            <motion.div
              style={{ opacity: opacityB, y: yB }}
              className="absolute inset-x-0 inset-y-24 md:inset-0 flex flex-col items-center md:items-start justify-start md:justify-center p-6 md:p-8 md:pl-[10%] pointer-events-none text-center md:text-left"
            >
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold md:font-semibold mb-3 md:mb-4 text-neutral-heading tracking-tight drop-shadow-sm">
                Birthday Cakes
              </h2>
              <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-heading max-w-[90%] md:max-w-md mx-auto md:mx-0 drop-shadow-sm leading-relaxed">
                Creative designs for unforgettable birthday celebrations.
              </p>
            </motion.div>

            {/* Beat C */}
            <motion.div
              style={{ opacity: opacityC, y: yC }}
              className="absolute inset-x-0 inset-y-24 md:inset-0 flex flex-col items-center md:items-end justify-start md:justify-center p-6 md:p-8 md:pr-[10%] pointer-events-none text-center md:text-right"
            >
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold md:font-semibold mb-3 md:mb-4 text-neutral-heading tracking-tight drop-shadow-sm">
                Wedding Cakes
              </h2>
              <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-heading max-w-[90%] md:max-w-md mx-auto md:mx-0 drop-shadow-sm leading-relaxed">
                Elegant multi layer cakes crafted with precision.
              </p>
            </motion.div>

            {/* Beat D */}
            <motion.div
              style={{ opacity: opacityD, y: yD }}
              className="absolute inset-x-0 inset-y-24 md:inset-0 flex flex-col items-center justify-start md:justify-center p-6 md:p-8 pointer-events-none text-center"
            >
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold md:font-semibold mb-3 md:mb-4 text-neutral-heading tracking-tight drop-shadow-sm">
                Order Your Dream Cake
              </h2>
              <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-heading mb-6 md:mb-8 drop-shadow-sm leading-relaxed">
                Contact Jeje Cake Bakery today.
              </p>
              <div className="pointer-events-auto mt-2 md:mt-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-brand-pink text-white border-2 border-accent-gold hover:bg-brand-deep rounded-[12px] px-6 sm:px-8 py-3 md:py-3.5 text-base md:text-lg font-medium transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-deep focus:ring-offset-2 focus:ring-offset-neutral-cream"
                >
                  Order Now
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
          >
            <span className="font-sans text-xs md:text-sm text-brand-deep mb-2 uppercase tracking-[0.2em] font-semibold">
              Scroll to Explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown
                size={28}
                className="text-brand-deep"
                strokeWidth={2.5}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
