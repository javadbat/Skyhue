
var gulp = require('gulp');
var cssmin = require("gulp-cssmin");
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var cssNext = require('postcss-cssnext');
//add sass like syntax to post css
var precss = require('precss');
//add moz and webkit and other prefix for compatibility
var autoprefixer = require('autoprefixer');

gulp.task('default', defaultTask);
gulp.task('cssMinifier', cssMinifier);

function cssMinifier(done) {
    console.log('start pipiline for css minifier');
    var postCssTools = [precss,autoprefixer({remove: false})]
    return gulp.src(["wwwroot/css/*.css","*.css"])
        .pipe(postcss(postCssTools))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("./minifycss/"));
    //return tasks;
   // done();
}


function defaultTask(done) {
    // place code for your default task here
    done();
}