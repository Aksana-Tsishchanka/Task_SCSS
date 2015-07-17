// Include gulp
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

var src = {
    scss: '"src/scss/*.scss"',
    css:  'app/css',
    html: 'src/*.html'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("build/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);