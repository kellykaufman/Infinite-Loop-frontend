// ////////////////////////////////////////////////
// Required Plugins 
// ///////////////////////////////////////////////

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');

const browserSync = require('browser-sync').create();



// ////////////////////////////////////////////////
// fileinclude
// /////////////////////////////////////////////// 

gulp.task('fileinclude', function () {
  gulp.src(['./src/html/**/*.html', '!./src/html/_*/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(plumber())
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});



// ////////////////////////////////////////////////
// Compile scss to css
// /////////////////////////////////////////////// 
gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.write())
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 3 version', "> 1%", 'ie 8', 'ie 9'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream());
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    injectChanges: true,
    server: "./dist/"
  });
  gulp.watch(['src/scss/**/*.scss'], ['sass']);
  gulp.watch(['./src/html/**/*.html'], ['fileinclude']);
  gulp.watch('./src/html/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve'])




// ////////////////////////////////////////////////
// ======>> Production Tasks
// ///////////////////////////////////////////////

// ////////////////////////////////////////////////
// Compress images 
// ///////////////////////////////////////////////

gulp.task('compress-img', function () {
  return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/img/'));
});



// ////////////////////////////////////////////////
// Concat css 
// ///////////////////////////////////////////////
gulp.task('concatcss', function () {
  return gulp.src([
      "src/vendor/animate.css/animate.min.css",
      "src/vendor/fancybox/dist/jquery.fancybox.min.css",
      "src/vendor/aos-master/aos-master/dist/aos.css",
      "src/vendor/prism/prism.css",
      "src/vendor/slick-carousel/slick/slick.css"
    ])
    .pipe(concat('vendors.bundle.css'))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/assets/css/'));
});


// ////////////////////////////////////////////////
// Concat Script
// ///////////////////////////////////////////////

gulp.task('concatjs', function () {
  return gulp.src([
      "src/vendor/jquery/dist/jquery.min.js",
      "src/vendor/bootstrap/dist/js/bootstrap.bundle.min.js",
      "src/vendor/smoothscroll/smoothscroll.js",
      "src/vendor/fancybox/dist/jquery.fancybox.min.js",
      "src/vendor/slick-carousel/slick/slick.min.js",
      "src/vendor/jarallax/dist/jarallax.min.js",
      "src/vendor/jquery-countTo-master/jquery.countTo.js",
      "src/vendor/jquery.countdown/dist/jquery.countdown.min.js",
      "src/vendor/aos-master/aos-master/dist/aos.js",
      "src/vendor/appear-master/dist/appear.min.js",
      "src/vendor/typed.js-master/lib/typed.min.js",
      "src/vendor/prism/prism.js",
      "src/vendor/imagesloaded/imagesloaded.pkgd.min.js"
    ])
    .pipe(concat('vendors.bundle.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/assets/js/'));
});





// ////////////////////////////////////////////////
// gulp build (will concat and minify all css and js vendor files, compress img in src/img)
// ///////////////////////////////////////////////


gulp.task('build', ['compress-img', 'concatcss', 'concatjs']);