import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";

const BASE_API_URL = "http://localhost:5001"

function PixlyApp() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  async function addImage(formData) {
    const response = await fetch(`${BASE_API_URL}/files`, {method: 'POST', body: JSON.stringify(formData), headers: {"Content-Type": "application/json"}})
    const newImage = await response.json();
    setImages(images => [...images, newImage]);
  }

  useEffect(() => {
    async function setInitialImages() {
      await setImages(getImages);
    }
    setInitialImages();
  }, []);

  async function getImages() {
    const response = await fetch(`${BASE_API_URL}/files`);
    return response.json();
  }


  //TODO: make a nice loading component/animation?
  if (!images) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesList addImage={addImage}/>
      </BrowserRouter>
    </>
  );


}

export default PixlyApp;
