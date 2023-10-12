import "./stylesheets/Homepage.css";
import { useState } from "react";


function ImageCard({ image }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="ImageCard">
      {!isLoaded && <p>Image Loading from S3...</p>}
      <div className="ImageCard-info">
        <h4>{image.name}{!!image.artist && `, by ${image.artist}`}</h4>
      </div>
        <img onLoad={() => setIsLoaded(true)} alt={image.name} src={image.presignedUrl} />
    </div>
  );
}


export default ImageCard;
