import { loadImages } from "./services/index.js";
import { toggleImage } from "./utils/index.js";

const image = document.querySelector("#image"); //es un div
const span = document.querySelector("#imageSpan");

const { img, name } = await loadImages(); //se obtiene la image y el nombre con la funcion.

const {
  setImageFigure, 
  setColorFigure, 
  toggleHasBeenClicked,
} = toggleImage();

setImageFigure({ imageHolder: image, span, img, name });

image.addEventListener("click", () => {
  //hasBeenClicked = !hasBeenClicked;
  const hasBeenClicked = toggleHasBeenClicked();

  if (hasBeenClicked) {
    setImageFigure({ imageHolder: image, img, span, name });
  } else {
    setColorFigure({ imageHolder: image, span });
  }
});