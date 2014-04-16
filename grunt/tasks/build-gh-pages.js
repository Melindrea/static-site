module.exports = function(grunt) {
    'use strict';

    grunt.config('buildGhPages', {
        production: {
            options: '<%= deploy %>'
        }
    });
};
