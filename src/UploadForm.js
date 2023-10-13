import { useState } from "react";
import "./stylesheets/UploadForm.css";


/** Form for signing up a new user */
function UploadForm({ addImage }) {

  // const [formData, setFormData] = useState(initialFormData);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  // const [errors, setErrors] = useState(null);


  function handleSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", name);

    addImage(formData);
    setName("");
    setSelectedFile(null);
  }



  return (
    <div className="UploadForm">
      <h3>Add a new image!</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="name">Name:</label>
        <input onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="name"
          name="name"
          required />
        <label className="form-label" htmlFor="file">File:</label>
        <input onChange={(e) => setSelectedFile(e.target.files[0])}
          id="file"
          type="file"
          name="file"
          required />
        <button>Upload</button>
      </form>
    </div>
  );
}



export default UploadForm;
