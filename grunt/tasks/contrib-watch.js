module.exports = function(grunt) {
    'use strict';

    grunt.config('watch', {
        assemble: {
            files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
            tasks: ['assemble']
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= config.dist %>/{,*/}*.html',
                '<%= config.dist %>/assets/{,*/}*.css',
                '<%= config.dist %>/assets/{,*/}*.js',
                '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    });
};
