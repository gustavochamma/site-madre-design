import { useState, type ImgHTMLAttributes } from "react";

export function SiteImage({ className = "", alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [unavailable, setUnavailable] = useState(false);
  return <img {...props} alt={alt} className={`${className}${unavailable ? " photo-unavailable" : ""}`} onError={() => setUnavailable(true)} />;
}