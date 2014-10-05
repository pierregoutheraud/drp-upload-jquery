'use strict';

var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  coffee = require('gulp-coffee'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify');

/* -------------
    Coffee
   ------------- */

gulp.task('coffee',function(){

  return gulp.src('*.coffee')
            .pipe(plumber())
            .pipe(coffee({
              bare: true,
              map: true
            }))
            .pipe(gulp.dest(''));

});

gulp.task('js', ['coffee'], function(){
  return gulp.src('drp-jquery-upload.js').pipe(uglify()).pipe(gulp.dest(''));
});

/* ---------
    html
   --------- */

gulp.task('html', function(){
  return gulp.src('*.html').pipe(gulp.dest(''));
});

/* -------
    Default
   ------- */

gulp.task('default', ['js', 'html'], function(){

});

/* -------
    Watch
   ------- */

gulp.task('watch', function(){
  var server = livereload();
  gulp.watch(['*.coffee'], ['coffee']).on('change', function(e){
    console.log('Le fichier ' + e.path + ' a ete modifie.');
  });
  gulp.watch('*.html', ['html']).on('change', function(e){
    console.log('Le fichier ' + e.path + ' a ete modifie.');
  });
  gulp.watch(['*.html','*.js']).on('change', function(e){
    server.changed(e.path);
    // console.log('Server reloaded.');
  });
});