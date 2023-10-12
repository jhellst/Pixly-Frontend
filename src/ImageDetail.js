// TODO:

// Create image detail which can be accessed by clicking on an ImageCard
// Design ImageDetail



// Look into image editing with Pillow
//    - Figure out how we want to store edits
//        - Each version in S3, or do we want to replace?

// Consider adding another column in db that starts null, then upon image edit will be updated in db with the presigned url
//    - Make the Homepage show edited image, if that column exists in the db (otherwise just show original)

import { useParams } from "react-router-dom";

function ImageDetail({ images }) {

  const { id } = useParams();

  console.log("ID:", id, "IMAGES:", images);

  const image = images.find(i => i.id === +id);

  console.log("IMAGE for detail page:", image);

  return (
    <div className="ImageDetail">
      <img src={image.presignedUrl} alt={image.name} />
      <div className="ImageDetail-info">
        {Object.keys(image.exifData).map((k, i) => (
          image.exifData[k]
            ? <p key={i}><b>{k}:</b> {image.exifData[k]}</p>
            : <></>
        ))}
      </div>
    </div>
  );

}

export default ImageDetail;
