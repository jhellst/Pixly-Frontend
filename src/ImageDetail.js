// TODO:

// Create image detail which can be accessed by clicking on an ImageCard
// Design ImageDetail



// Look into image editing with Pillow
//    - Figure out how we want to store edits
//        - Each version in S3, or do we want to replace?

// Consider adding another column in db that starts null, then upon image edit will be updated in db with the presigned url
//    - Make the Homepage show edited image, if that column exists in the db (otherwise just show original)
import { useState } from "react";
import { useParams } from "react-router-dom";

function ImageDetail({ images, editImage }) {
  const { id } = useParams();
  const image = images.find(i => i.id === +id);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editedImage, setEditedImage] = useState(null);

  async function submitEdit(operation) {
    // const editUrl = await editImage(id, operation);
    setIsEdit(true);
    // console.log("Got back edit url!", image.editUrl);
    setEditedImage(async () => await editImage(id, operation));
  }

  return (
    <div className="ImageDetail">
      <div className="ImageDetail-edit-buttons">
        <h3>Edit Your Image!</h3>
        <button onClick={() => submitEdit("greyscale")}>Greyscale</button>
        <button onClick={() => submitEdit("flip")}>Flip 180</button>
        <button onClick={() => submitEdit("sepia")}>Sepia</button>
      </div>
      {editedImage &&
        <>
          {isEdit
            ? <img onLoad={() => setIsLoaded(true)} src={image.editUrl} alt={image.name} />
            : <img onLoad={() => setIsLoaded(true)} src={image.presignedUrl} alt={image.name} />
          }
        </>
      }
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
