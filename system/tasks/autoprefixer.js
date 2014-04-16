module.exports = function(grunt) {
    'use strict';

    grunt.config('autoprefixer', {
        options: {
            browsers: ['last 1 version', '> 1%', 'Explorer 8'],
            cascade: true
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%= directories.build.assets %>/styles/',
                src: '{,*/}*.css',
                dest: '<%= directories.build.assets %>/styles/'
            }]
        }
    });
};
