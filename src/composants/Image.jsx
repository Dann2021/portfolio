function Image({ source, className, alt, width, height, masque }) {
  return (
    <img
      src={source}
      className={`image ${className}`}
      alt={alt}
      width={width}
      height={height}
      hidden={masque}
    />
  );
}

export default Image;
