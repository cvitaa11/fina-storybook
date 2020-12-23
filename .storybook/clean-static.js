const rimraf = require('rimraf');
const globby = require('globby');

globby(['build/*', '!build/*.css']).then(function then(paths) {
  paths.map(function map(item) {
    rimraf.sync(item);
  });
});
