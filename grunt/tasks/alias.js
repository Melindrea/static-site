module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('commit', [
        'lint'
    ]);

    grunt.registerTask('default', [
        'lint',
        'clean:html',
        'build'
    ]);
};
