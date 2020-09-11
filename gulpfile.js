var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var rename = require('gulp-rename');
var path = require('path');

var materialiconsfolder = 'material-design-icons-4.0.0/src';

gulp.task('materialicons', function () {
    return gulp
        .src(materialiconsfolder + '/*/*/materialicons/24px.svg', {
            base: materialiconsfolder
        })
        .pipe(rename(function (file) {
            var name = file.dirname.split(path.sep);
            // name.push(file.basename);
            // remove materialiconsoutlined in text
            name.splice(2, 1);
            file.basename = name.join('-');
        }))
        .pipe(rename({
            prefix: 'm-icon-'
        }))
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('dest'));
});

gulp.task('materialiconsoutlined', function () {
    return gulp
        .src(materialiconsfolder + '/*/*/materialiconsoutlined/24px.svg', {
            base: materialiconsfolder
        })
        .pipe(rename(function (file) {
            var name = file.dirname.split(path.sep);
            // name.push(file.basename);
            // remove materialiconsoutlined in text
            name.splice(2, 1);
            file.basename = name.join('-');
        }))
        .pipe(rename({
            prefix: 'm-icon-'
        }))
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('dest'));
});


gulp.task('materialiconsround', function () {
    return gulp
        .src(materialiconsfolder + '/*/*/materialiconsround/24px.svg', {
            base: materialiconsfolder
        })
        .pipe(rename(function (file) {
            var name = file.dirname.split(path.sep);
            // name.push(file.basename);
            // remove materialiconsoutlined in text
            name.splice(2, 1);
            file.basename = name.join('-');
        }))
        .pipe(rename({
            prefix: 'm-icon-'
        }))
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('dest'));
});

gulp.task('materialiconssharp', function () {
    return gulp
        .src(materialiconsfolder + '/*/*/materialiconssharp/24px.svg', {
            base: materialiconsfolder
        })
        .pipe(rename(function (file) {
            var name = file.dirname.split(path.sep);
            // name.push(file.basename);
            // remove materialiconsoutlined in text
            name.splice(2, 1);
            file.basename = name.join('-');
        }))
        .pipe(rename({
            prefix: 'm-icon-'
        }))
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('dest'));
});

gulp.task('materialiconstwotone', function () {
    return gulp
        .src(materialiconsfolder + '/*/*/materialiconstwotone/24px.svg', {
            base: materialiconsfolder
        })
        .pipe(rename(function (file) {
            var name = file.dirname.split(path.sep);
            // name.push(file.basename);
            // remove materialiconsoutlined in text
            name.splice(2, 1);
            file.basename = name.join('-');
        }))
        .pipe(rename({
            prefix: 'm-icon-'
        }))
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('dest'));
});
