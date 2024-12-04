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

export const pickRandomItem = ({ arr }) => {
  if (!Array.isArray(arr)) {
    throw new Error("arr must be an array");
  }

  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
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
//crea el componente imageCard, retorna el container de la imagen y span, el span y la imagen.
export const createImageCard = ({ imageUrl, title }) => {
  // Crear el contenedor principal
  const container = document.createElement("div");
  container.classList.add("container", "container-styles");

  // Crear el div que simula la imagen
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("img", "img-styles");
  imageDiv.style.backgroundImage = `url('${imageUrl}')`;
  
  // Crear el span para el título
  const titleSpan = document.createElement("span");
  titleSpan.classList.add("image-span");
  titleSpan.textContent = title;

  // Agregar el div de imagen y el span al contenedor
  container.appendChild(imageDiv);
  container.appendChild(titleSpan);

  return {
    container, 
    imageHolder: imageDiv,
    span: titleSpan
  };
}