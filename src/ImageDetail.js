// TODO:

// Create image detail which can be accessed by clicking on an ImageCard
// Design ImageDetail



// Look into image editing with Pillow
//    - Figure out how we want to store edits
//        - Each version in S3, or do we want to replace?

// Consider adding another column in db that starts null, then upon image edit will be updated in db with the presigned url
//    - Make the Homepage show edited image, if that column exists in the db (otherwise just show original)