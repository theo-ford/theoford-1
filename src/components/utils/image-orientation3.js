export const ImageOrientation3 = (fullBleed, image) => {
  console.log(fullBleed);
  var x = image.dimensions.height / image.dimensions.width;
  const isImageSmlPortrait = x > 1.2;
  const isImageLrgPortrait = x > 1.7;
  const isImageLandscape = image.dimensions.width > image.dimensions.height;
  const isImageSquare = image.dimensions.width === image.dimensions.height;
  const fullBleedVar = fullBleed;

  if (fullBleedVar == "true") {
    return "fullBleedClass";
  } else if (isImageLrgPortrait === true) {
    return "lrg-portrait";
  } else if (isImageSmlPortrait === true) {
    return "sml-portrait";
  } else if (isImageSquare === true) {
    return "square";
  }
};
