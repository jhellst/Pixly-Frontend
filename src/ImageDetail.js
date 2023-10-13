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
import "./stylesheets/ImageDetail.css";

function ImageDetail({ images, editImage }) {
  const { id } = useParams();
  const image = images.find(i => i.id === +id);
  const [isEdit, setIsEdit] = useState(false);

  async function submitEdit(operation) {
    setIsEdit(() => false);
    await editImage(id, operation);
    setIsEdit(() => true);
  }

  function toggleIsEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <div className="ImageDetail">
      <h3>Edit Your Image!</h3>
      <div className="ImageDetail-edit-buttons">
        <button onClick={() => submitEdit("greyscale")}>Greyscale</button>
        <button onClick={() => submitEdit("flip")}>Flip 180</button>
        {/* <button onClick={() => submitEdit("sepia")}>Sepia</button> */}
      </div>
      <div className="ImageDetail-image-container">
          {isEdit
        ? <img src={image.editUrl} alt={image.name} />
        : <img src={image.presignedUrl} alt={image.name} />
      }
      </div>
      {!!image.editUrl &&
        <div className="ImageDetail-toggle-buttons">
          <button disabled={!isEdit} onClick={toggleIsEdit}>Original</button>
          <button disabled={isEdit} onClick={toggleIsEdit}>Edited</button>
        </div>
      }
      <div className="ImageDetail-info">
        <h3>Image Details:</h3>
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
