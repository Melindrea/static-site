module.exports = function(grunt) {
    'use strict';

    grunt.config('watch', {
        assemble: {
            files: ['<%= directories.base %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
            tasks: ['assemble']
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= directories.build.base %>/{,*/}*.html',
                '<%= directories.build.assets %>/{,*/}*.css',
                '<%= directories.build.assets %>/{,*/}*.js',
                '<%= directories.build.assets %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    });
};
