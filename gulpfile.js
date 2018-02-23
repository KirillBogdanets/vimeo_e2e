const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('vimeo-ws-tests', () =>
    gulp.src('ws/*.js', {read: false})
        .pipe(mocha({reporter: 'spec', exit: true}))
        .on('error', console.error)
);