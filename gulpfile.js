// Include gulp

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');

var src = {
    scss: '"src/scss/*.scss"',
    css:  'app/css',
    html: 'src/*.html'
};

// Static Server + watching style.css/html files
gulp.task('serve', ['fileinclude','sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/scss/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("src/html/*.html",['fileinclude']).on('change', browserSync.reload);
    //gulp.watch(["src/html/*.html"],['fileinclude', browserSync.reload]);
    gulp.watch("src/assets/*/*.*").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("build/css"))
        .pipe(browserSync.stream());
});

gulp.task('fileinclude', function() {
    gulp.src(['./src/html/index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['serve']);