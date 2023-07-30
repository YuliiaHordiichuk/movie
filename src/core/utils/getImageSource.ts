export function getImageSource(src: string, width = '500') {
  if (!src) {
    return '';
  }

  return `${process.env.REACT_APP_ASSETS_URL}/w${width}${src}`;
}
