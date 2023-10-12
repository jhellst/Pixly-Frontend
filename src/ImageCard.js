import "./stylesheets/Homepage.css"


function ImageCard({ image }) {

  console.log("Image", image);

  return (
    <div className="ImageCard">
      <div className="ImageCard-info">
        <h4>{image.name}{!!image.artist && `, by ${image.artist}`}</h4>
      </div>
      <img alt={image.name} src={image.presignedUrl} />
    </div>
  )
}


export default ImageCard;
