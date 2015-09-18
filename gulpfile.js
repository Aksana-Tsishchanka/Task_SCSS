// Include gulp
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');

var src = {
    scss: '"src/scss/*.scss"',
    css:  'app/css',
    html: 'src/*.html'
};

// Static Server + watching style.css/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/scss/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);
    gulp.watch("src/assets/*/*.*").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("build/css"))
        .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);