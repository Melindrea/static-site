module.exports = function(grunt) {
    'use strict';

    grunt.config('cssmin', {
        dist: {
            expand: true,
            cwd: '<%= directories.build.assets %>/styles',
            src: ['{,*/}*.max.css'],
            dest: '<%= directories.build.assets %>/styles',
            ext: '.css'
        }
    });
};
