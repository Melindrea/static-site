module.exports = function(grunt) {
    'use strict';

    grunt.config('prettify', {
        options: {
            config: '.prettifyrc'
        },
        // Prettify a directory of files
        all: {
            expand: true,
            cwd: '<%= site.dest %>/',
            ext: '.html',
            src: ['**/*.html'],
            dest: '<%= site.dest %>/'
        }
    });
};
