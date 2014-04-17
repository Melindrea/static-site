module.exports = function(grunt) {
    'use strict';

    grunt.config('cssmin', {
        dist: {
            expand: true,
            cwd: '<%= site.assets %>/styles',
            src: ['{,*/}*.max.css'],
            dest: '<%= site.assets %>/styles',
            ext: '.css'
        }
    });
};
