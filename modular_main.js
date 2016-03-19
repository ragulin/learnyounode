const filter_files = require('./modular');

filter_files(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    return console.error('Some error', err);
  }
  console.log(data.join('\n'));
});
