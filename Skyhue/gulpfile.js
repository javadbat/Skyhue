

var gulp = require('gulp');
var cssmin = require("gulp-cssmin");
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var precss = require('precss');
//var preCss = require('precss');

gulp.task('default', defaultTask);
gulp.task('cssMinifier', cssMinifier);

function cssMinifier(done) {
    console.log('start pipiline for css minifier');
    var postCssTools = [precss]
    return gulp.src(["wwwroot/css/*.css","*.css"])
        .pipe(cssmin())
        .pipe(postcss(postCssTools))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("./minifycss/"));
    //return tasks;
   // done();
}


function defaultTask(done) {
    // place code for your default task here
    done();
}