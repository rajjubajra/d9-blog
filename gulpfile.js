const {src, dest, watch, series} = require('gulp');

/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * ../tw2-*
 * 
 */

/** IMPORTANT: 
 * Change working project Folder 
 * in following "src" and "watch" */

function moveFiles(){
  return src('./b5-01-blog/build/**/*.*')
  .pipe(dest('./b5-01'))
}

function watchTask(){
  watch('./b5-01-blog/build/**/*.*');
}

//default gulp
exports.default = series(moveFiles);