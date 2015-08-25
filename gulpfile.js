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
gulp.task('serve', ['combine-css'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/scss/*.scss", ['combine-css']).on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);
    gulp.watch("src/assets/*/*.*").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/scss/css"))
        .pipe(browserSync.stream());
});


gulp.task('combine-css',['sass'], function() {
    return gulp.src('src/scss/css/*.css')
       // .pipe(minifyCSS())
           .pipe(autoprefixer('last 2 version'))
           .pipe(concatCss('style.css'))
           .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['serve']);