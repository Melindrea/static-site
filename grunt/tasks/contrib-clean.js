module.exports = function(grunt) {
    'use strict';

    grunt.config('clean', {
        html: ['<%= config.dist %>/**/*.{html,xml}']
    });
};
