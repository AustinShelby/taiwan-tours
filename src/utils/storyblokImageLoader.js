const storyblokImageLoader = ({ src, width, quality }) => {
  const x = `${src}/m/${width}x0/filters:quality(${quality || 75})`;
  return x;
};

export default storyblokImageLoader;
