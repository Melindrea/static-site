module.exports = function(grunt) {
    'use strict';

    grunt.config('modernizr', {
        dist: {
            // [REQUIRED] Path to the build you're using for development.
            devFile: 'remote',

            // [REQUIRED] Path to save out the built file.
            outputFile: '<%= directories.assets.js %>/vendor/modernizr.dev.js',

            // Based on default settings on http://modernizr.com/download/
            extra: {
                'shiv': true,
                'printshiv': false,
                'load': true,
                'mq': false,
                'cssclasses': true
            },

            // Based on default settings on http://modernizr.com/download/
            'extensibility': {
                'addtest': false,
                'prefixed': false,
                'teststyles': false,
                'testprops': false,
                'testallprops': false,
                'hasevents': false,
                'prefixes': false,
                'domprefixes': false
            },

            // By default, source is uglified before saving
            uglify: false,

            // Define any tests you want to implicitly include.
            tests: [],

            // By default, this task will crawl your project for references to Modernizr tests.
            // Set to false to disable.
            parseFiles: false,

            // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
            // You can override this by defining a 'files' array below.
            files: {
                src: [
                    '<%= files.js %>',
                    '<%= files.styles %>'
                ]
            },

            // When parseFiles = true, matchCommunityTests = true will attempt to
            // match user-contributed tests.
            matchCommunityTests: false,

            // Have custom Modernizr tests? Add paths to their location here.
            customTests: []
        }
    });
};
