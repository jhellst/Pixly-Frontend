import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import "dotenv";
import NavBar from "./NavBar";

const BASE_API_URL = process.env.BASE_API_URL;

function PixlyApp() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
        <RoutesList />
      </BrowserRouter>
    </>
  );


}

export default PixlyApp;
