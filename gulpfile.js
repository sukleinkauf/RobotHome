var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var less = require('gulp-less');

gulp.task('serve', ['nodemon'], function() {
	browserSync.init({
		proxy: "localhost:3000",
		port: 5000,
		notify: true
	});

	gulp.watch("./less/**/*.less", ['less']);
	gulp.watch("./views/**/*.pug").on('change', reload);
	gulp.watch("./public/javascripts/script.js").on('change', reload);

});

gulp.task('nodemon', function(){
	var called=true;
	return nodemon({
		script: './bin/www',
		ignore: [
			'gulpfile.js',
			'node_modules/'
		]
	})
	.on('start', function(){
		if(!called){
			called=true;
			cb();
		}
	})
	.on('restart', function(){
		setTimeout(function(){
			reload({ stream: false });
		}, 1000);
	});
});

gulp.task('less', function(){
	return gulp.src('./less/**.less')
		.pipe(less())
		.pipe(gulp.dest('./public/stylesheets'))
		.pipe(browserSync.stream());
});

gulp.task('jquery', function() {
	gulp.src('./bower_components/jquery/dist/jquery.min.js')
		.pipe(gulp.dest('./public/javascripts'));
});

gulp.task('bootstrap', function(){
	gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
		.pipe(gulp.dest('./public/stylesheets/bootstrap'));
	gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
		.pipe(gulp.dest('./public/javascripts/bootstrap'));
});

gulp.task('font-awesome', function() {
	gulp.src('./bower_components/font-awesome/css/font-awesome.min.css')
		.pipe(gulp.dest('./public/stylesheets'));
	gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}')
		.pipe(gulp.dest('./public/fonts'));
});

gulp.task('files', ['jquery', 'bootstrap', 'font-awesome']);

gulp.task('default', ['serve']);