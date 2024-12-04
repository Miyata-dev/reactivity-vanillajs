import { loadImage } from "./services/index.js";
import { toggleImage, pickRandomItem, createImageCard } from "./utils/index.js";
import { queryNames } from "./constants/index.js";

const imageContainer = document.querySelector("#imageContainer");
const image = document.querySelector("#image"); //es un div
const span = document.querySelector("#imageSpan");
const imgGenerator = document.querySelector("#imgBtn");

const { img, name } = await loadImage({ query: queryNames[1].name }); //se obtiene la image y el nombre con la funcion.

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

imgGenerator.addEventListener("click", async () => {
  imgGenerator.disabled = true;
  //se obtienen las funciones para cada una de las imagenes generadas.
  const {
    setImageFigure, 
    setColorFigure, 
    toggleHasBeenClicked,
  } = toggleImage();

  const query = pickRandomItem({ arr: queryNames }); //el item viene en este formato: { name: "" }
  const { img, name } = await loadImage({ query: query.name });

  //crea una imagen y la agrega dom om.
  const {
    container,
    imageHolder,
    span
  } = createImageCard({ imageUrl: img, title: name });

  //después de crear el div, se agrega ald om y se agrega el evento.
  setImageFigure({ imageHolder, img, span, name });
  imageContainer.appendChild(container);
  imageHolder.addEventListener("click", () => {
    //hasBeenClicked = !hasBeenClicked;
    const hasBeenClicked = toggleHasBeenClicked();
  
    if (hasBeenClicked) {
      setImageFigure({ imageHolder, img, span, name });
    } else {
      setColorFigure({ imageHolder, span });
    }
  });
  imgGenerator.disabled = false;
});