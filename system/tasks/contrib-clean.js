module.exports = function(grunt) {
    'use strict';

    grunt.config('clean', {
        tmp: '.tmp',
        html: '<%= directories.build.base %>/**/*.{html,xml}',
        assets: '<%= directories.build.assets %>'
    });
};
