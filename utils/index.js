export const loadJSON = async ({ jsonFile }) => {
  const data = await fetch(jsonFile);

  if (!data.ok) {
    throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
  }

  const json = await data.json();
  return json;
}
 
const getImageStyles = ({ img }) => {
  //crea estilos para un div que actua como imagen.
  const styles = `
    background-image: url(${img});
    background-size: cover;
    background-position: center;
  `;

  return styles;
}

const getColorStyles = ({ color }) => {
  const colorStyles = `
    background-color: ${color};
  `;

  return colorStyles;
}

const setImageStyles = ({ image, styles }) => {
  image.style.cssText = styles;
};

const setSpanText = ({ span, text }) => {
  span.textContent = text;
}

//devuelve la funcion que cambia a la imagen que cambia al color, y el valor que decide cual usar.
//imageHolder: "div que holdea la imagen", img: "imagen en si", name: "nombre de la imagen"
export const toggleImage = () => {
  let hasBeenClicked = true;  //esta es la variable que decide el toggle

  const setImageFigure = ({ imageHolder, img, span, name }) => {
    const styles = getImageStyles({ img }); 
  
    setImageStyles({ image: imageHolder, styles });
    setSpanText({ span, text: name });
  }
  
  const setColorFigure = ({ imageHolder, span }) => {
    const colorStyles = getColorStyles({ color: "#f0a500" });
  
    setImageStyles({ image: imageHolder , styles: colorStyles });
    //span.textContent = "click box";
    setSpanText({ span, text: "click box" });
  }

  const toggleHasBeenClicked = () => {
    hasBeenClicked = !hasBeenClicked;
    return hasBeenClicked;
  }

  return {  
    setColorFigure,
    setImageFigure,
    toggleHasBeenClicked,
  };
}