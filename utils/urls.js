export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_test_1B3FA6AE3FE2CDB7";

export const STRIPE_PK =
  process.env.NEXT_PUBLIC_STRIPE_PK || "pk_test_51IVY7iGZTI6mYHWyHHTcMm4d1RZRcF6VkTMAmdFC09iG9cFGzqbs9mgKSYBsyXoHVF43uLe8envSVxOsKBkM3Egx00THySoHcm";
/**
 *
 * @param {any} image
 */

export const fromImageToUrl = (image) => {
  if (!image) {
    return "/vercel.svg";
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
