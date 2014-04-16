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
                '<%= directories.build.assets %>/scripts/head.js': ['<%= concat.head.dest %>'],
                '<%= directories.build.assets %>/scripts/main.js': ['<%= concat.main.dest %>']
            }
        }
    });
};
