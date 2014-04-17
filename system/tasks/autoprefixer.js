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
                cwd: '<%= site.assets %>/styles/',
                src: '{,*/}*.css',
                dest: '<%= site.assets %>/styles/'
            }]
        }
    });
};
