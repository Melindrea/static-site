module.exports = function(grunt) {
    'use strict';

    grunt.config('uglify', {
        options: {
            // report: 'gzip',
            mangle: false,
            compress: {
                'drop_console': true
            }
        },
        js: {
            files: {
                '<%= site.assets %>/scripts/head.js': ['<%= concat.head.dest %>'],
                '<%= site.assets %>/scripts/main.js': ['<%= concat.main.dest %>']
            }
        }
    });
};
