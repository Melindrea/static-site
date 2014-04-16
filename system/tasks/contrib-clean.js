module.exports = function(grunt) {
    'use strict';

    grunt.config('clean', {
        tmp: '.tmp',
        build: '<%= directories.build.base %>'
    });
};
