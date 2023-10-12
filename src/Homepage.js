import { NavLink, Link } from "react-router-dom";
// import './Homepage.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import ImageCard from "./ImageCard";


/** Homepage which displays welcome message or login/sign up buttons */
function Homepage({ images }) {

  console.log("Homepage images prop", images)

  return (
    <div className="Homepage">
      <h1>Pixly</h1>
      <p>All your images in one, convenient place.</p>
      <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                  {images && images.map(image => <ImageCard key={image.id} image={image}/>)}
                  {/* <ImageCard key={images[0].id} image={images[0]}/> */}
                </Masonry>
            </ResponsiveMasonry>
    </div>
  );
}

export default Homepage;
