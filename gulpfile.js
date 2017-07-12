var gulp        = require('gulp'),
	watch       = require('gulp-watch'),
	browserSync = require("browser-sync").create(),
	reload      = browserSync.reload;

var config = {
	server: {baseDir: "./"},
    startPath: '/',
	port: 9000
};

gulp.task('watch', function () {
	gulp.watch(['*.*']).on('change', reload);
});

gulp.task('default', ['watch'], function () {
	browserSync.init(config);
});
