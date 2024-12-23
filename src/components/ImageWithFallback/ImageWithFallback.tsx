
import * as React from "react";
import { type ImgHTMLAttributes, useState } from "react";
import { Skeleton } from "./Skeleton.tsx";
import defaultSource from "../../assets/defaultSource.png"

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  srcFallback?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = "Default",
  srcFallback,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [loading, setLoading] = useState(true);

  const handleImageError = () => {
    if (imageSrc === src) {
			setImageSrc(srcFallback || defaultSource);
		}
    if (imageSrc === srcFallback) {
			setImageSrc(defaultSource); 
				}
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && <Skeleton/> }
       <img 
        src={imageSrc}
        onLoad={handleImageLoad}
        onError={handleImageError}
        {...props}
        alt={alt}
       />
    </div>
  );
};
export default ImageWithFallback