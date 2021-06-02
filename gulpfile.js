const {src, dest, watch, series} = require('gulp');

/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * ../b5-*
 * 
 */

function moveFiles(){
  return src('./b5_01_blog/build/**/*.*')
  .pipe(dest('./b5-01'))
}

function watchTask(){
  watch('./b5_01_blog/build/*.*');
}

//default gulp
exports.default = series(moveFiles, watchTask);