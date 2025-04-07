import multer from 'multer';

//using diskstorage - destination, fileName and path
// memoryStorage - buffer
// cb - callback function
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp');
  },
  filename: function (req, file, cb) {
    cb(null, file.orginalname);
  },
});
// function (req, file, cb) is a controller

export const upload = multer({
  storage: storage,
});
