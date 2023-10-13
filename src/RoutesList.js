import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import UploadForm from './UploadForm';
import ImageDetail from './ImageDetail';

/** Provides routing for app. Will provide access to routes with info on
 *    companies/jobs/profile if user is logged in, otherwise will
 *    show only login and signup buttons, and will not allow other routing.
 */
function RoutesList({ images, addImage, editImage }) {
// TODO: Include additional callbacks in props as needed.
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage images={images} />} />
        <Route path="/images/:id" element={<ImageDetail
          images={images}
          editImage={editImage} />} />
          <Route path="/upload" element={<UploadForm addImage={addImage} />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    </>
  );
}


export default RoutesList;
