const {src, dest, watch, series} = require('gulp');

/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * ../tw2-*
 * 
 */

function moveFiles(){
  return src('./tw2_01_blog/build/**/*.*')
  .pipe(dest('./tw2-01'))
}

function watchTask(){
  watch('./tw2_01_blog/build/*.*');
}

//default gulp
exports.default = series(moveFiles, watchTask);