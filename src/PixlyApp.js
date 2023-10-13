import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";

const BASE_API_URL = "http://localhost:5001"

function PixlyApp() {
  const [images, setImages] = useState(null);

  console.log("STATE Imgaes", images);



  useEffect(() => {
    async function setInitialImages() {
      const newImages = await getImages();
      setImages(newImages);
    }
    setInitialImages();
  }, []);

  async function getImages() {
    const response = await fetch(`${BASE_API_URL}/files`);
    return await response.json();
  }

  async function addImage(formData) {
    const response = await fetch(
      `${BASE_API_URL}/files`,
      {
        method: 'POST',
        body: formData,
        // headers: { "Content-Type": "multipart/form-data" }
      });
    const newImage = await response.json();
    setImages(images => [...images, newImage]);
  }

  async function editImage(id, editOperation) {
    console.log("Attempting to edit with operation:", editOperation);
    const response = await fetch(
      `${BASE_API_URL}/files/${id}`,
      {
        method: 'PATCH',
        body: { operation: editOperation },
        headers: { "Content-Type": "application/json" }
      });
    const editData = await response.json();

    return editData.editUrl;
  }

  //TODO: make a nice loading component/animation?
  if (!images) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesList images={images} addImage={addImage} editImage={editImage} />
      </BrowserRouter>
    </>
  );


}

export default PixlyApp;
