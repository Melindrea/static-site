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
                '<%= site.dest %>/{,*/}*.html',
                '<%= site.assets %>/{,*/}*.css',
                '<%= site.assets %>/{,*/}*.js',
                '<%= site.assets %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    });
};
