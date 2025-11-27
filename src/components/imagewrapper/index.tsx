type Props = {
  src: string;
  webp?: string;
  alt: string;
  className?: string;
};

const ResponsiveImage = ({ src, webp, alt, className }: Props) => {
  return (
    <picture className={`overflow-hidden shrink-0 block ${className || ""}`}>
  {webp && <source srcSet={webp} type="image/webp" />}
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className="w-full h-full object-cover block"
  />
</picture>
  );
};

export default ResponsiveImage;