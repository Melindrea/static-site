module.exports = function(grunt) {
    'use strict';

    grunt.config('concat', {
        options: {
            // define a string to put between each file in the concatenated output
            separator: ';'
        },
        head: {
            // the files to concatenate
            src: [
                '<%= directories.assets.js %>/vendor/modernizr.dev.js'
            ],
            // the location of the resulting JS file
            dest: '<%= directories.build.assets %>/scripts/head.max.js'
        },
        main: {
            // the files to concatenate
            src: [
                '<%= directories.bower %>/jquery/jquery.js',
                '<%= directories.bower %>/showdown/src/showdown.js',
                '<%= directories.bower %>/momentjs/moment.js',
                '<%= directories.assets.js %>/main.js'
            ],
            // the location of the resulting JS file
            dest: '<%= directories.build.assets %>/scripts/main.max.js'
        }
    });
};
