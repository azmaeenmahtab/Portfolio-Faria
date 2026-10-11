import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  aspectRatio?: string;
  className?: string;
  rounded?: string;
  iconSize?: number;
}

/**
 * A clean neutral image placeholder that shows a soft gradient with an image icon.
 * Swap with real <Image> components when real images are available.
 */
export function ImagePlaceholder({
  aspectRatio = "16/10",
  className = "",
  rounded = "rounded-[20px]",
  iconSize = 32,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder ${rounded} overflow-hidden ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label="Placeholder image — replace with actual image"
    >
      <ImageIcon size={iconSize} strokeWidth={1.5} />
    </div>
  );
}
