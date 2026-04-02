import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import ReadyToStart from "@/components/ReadyToStart";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <FAQ />
        <ReadyToStart />
        <Footer />
      </main>
    </>
  );
}
