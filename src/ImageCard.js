


function ImageCard({ image }) {

  console.log("Image", image);

  return (
    <>
    <div>{image.id} {image.name}</div>
    <img src={image.presignedUrl}></img>
    </>
  )
}


export default ImageCard;