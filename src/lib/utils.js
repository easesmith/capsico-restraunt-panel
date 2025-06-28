import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function viewDbImagePreview(imagePath) {
  return `${import.meta.env.VITE_IMAGE_URL}/${imagePath}`;
}
