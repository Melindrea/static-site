module.exports = function(grunt) {
    'use strict';

    grunt.config('clean', {
        tmp: '.tmp',
        build: '<%= site.dest %>'
    });
};
