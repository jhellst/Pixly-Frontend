// import { NavLink, Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageCard from "./ImageCard";
import "./stylesheets/Homepage.css";


/** Homepage which displays welcome message or login/sign up buttons */
function Homepage({ images }) {

  return (
    <div className="Homepage">
      <h1>Pixly</h1>
      <p>All your images in one, convenient place.</p>
      {/* {images && images.map(image => (<ImageCard key={image.id} image={image} />))} */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter={"15px"}>
          {images && images.map(image => (<ImageCard key={image.id} image={image} />))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Homepage;
