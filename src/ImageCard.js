


function ImageCard({ image }) {
  return (
    <>
    // TODO: Figure out how to display image from S3 without downloading.
    {/* <img src={image}></img> */}
    <div>{image.id} {image.name}</div>
    </>
  )
}


export default ImageCard;