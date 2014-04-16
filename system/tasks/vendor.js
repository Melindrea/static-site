module.exports = function(grunt) {
    'use strict';
    var sh = require('execSync').run;

    grunt.registerTask('vendor', function() {
        sh('bower install');

        sh('bundle');
    });
};
