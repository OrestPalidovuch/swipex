var gulp = require('gulp'); // запускає все в default
var	concat = require('gulp-concat'); // збирає всі однотипні файли в один
var cssmin = require('gulp-cssmin'); // забирирає пробіли css
var uglify = require('gulp-uglify'); // мінімізує js
var plumber = require('gulp-plumber'); // щоб не вибивав watch при помилці
var csslint = require('gulp-csslint'); //перевірка валтдності css
var autoprefixer = require('gulp-autoprefixer'); // додає префікси типу -webkit-
//const imagemin = require('gulp-imagemin'); // pзменшує вагу картинки
var webserver = require('gulp-webserver'); //автооновлення при зміні коду
var gutil = require('gulp-util');	// для створення версій релізу
var fs = require('fs'); 			// для створення версій релізу
var jade = require('gulp-jade'); // збирає html з jade
var less = require('gulp-less'); // збирає css з less

gulp.task('cssConcat', function() {
  gulp.src(['./css/style.css','./css/2.css'])
  	.pipe(autoprefixer())
  	.pipe(concat('all.css'))
  	.pipe(gulp.dest('./dist'));
});

gulp.task('cssMin', function() {
  gulp.src(['./css/style.css','./css/2.css'])
  	.pipe(plumber())
  	.pipe(concat('all.min.css'))
  	.pipe(cssmin())
  	.pipe(gulp.dest('./dist'));
});

gulp.task('jsUglify', function() {
  gulp.src(['./js/1.js','./js/2.js'])
  	.pipe(concat('all.js'))
  	.pipe(uglify())
  	.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
	gulp.watch('./css/*.css', ['cssMin','csslint']),
	gulp.watch('./js/**/*.js', ['jsUglify']),
	gulp.watch('./**/*.jade', ['jade']);
	gulp.watch('./**/*.less', ['less']);
});

gulp.task('csslint', function() {
  gulp.src('./css/**/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});

gulp.task('webserver', function() {
  gulp.src('./')
  	.pipe(plumber())
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('jade', function() {
  gulp.src('./**/*.jade')
  	.pipe(plumber())
  	.pipe(jade({
  		pretty : true
  	}))
  	.pipe(gulp.dest('./dist'))
});

gulp.task('less', function() {
  gulp.src('./less/*.less')
  	.pipe(less())
  	.pipe(gulp.dest('./css'))
});

gulp.task('default', ['watch','webserver']); // запускає таски при зміні файла