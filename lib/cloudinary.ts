/**
 * Cloudinary Helper Utility for Jeje Cake Bakery
 * 
 * Usage:
 * cld("f_auto,q_auto,w_800/folder/image-name")
 * 
 * Transformations:
 * f_auto: Automatically choose the best format (WebP/AVIF)
 * q_auto: Automatically optimize quality
 * w_800: Resize to 800px width
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dl12vf8h5";

/**
 * Builds a Cloudinary URL for a given asset path and optional transformations.
 * @param path The path to the asset in Cloudinary (including optional transformation strings)
 * @returns Federated Cloudinary URL
 */
export const cld = (path: string): string => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${path}`;
};
