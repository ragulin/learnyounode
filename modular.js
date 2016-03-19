const fs = require('fs');
const path = require('path');

module.exports = function filter_files(dir, ext, cb) {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return cb(err);
    }
    const files = list.filter(file => path.extname(file) == '.' + ext);
    cb(null, files);
  });

}
