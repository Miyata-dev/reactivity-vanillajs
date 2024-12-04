import { loadJSON } from "../utils/index.js";

export const getCatImage = async ({ URL, API_KEY }) => {
  if (URL === undefined) {
    throw new Error("URL must be defined");
  }

  const data = await fetch(URL, {
    headers: {
      "X-Api-Key": API_KEY
    }
  });

  const json = await data.json();
  const mapped = json.map(el => ({
    img: el.image_link,
    name: el.name
  }));

  return mapped[0];
}

export const loadImages = async () => {
  const { CAT_URL, API_KEY } = await loadJSON({ jsonFile: "../data/data.json" });
  const data = await getCatImage({ URL: CAT_URL, API_KEY });
  const { img, name } = data;

  return { img, name };
}
