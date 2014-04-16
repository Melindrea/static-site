module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('server', function() {
        grunt.task.run([
            'build',
            'connect:livereload',
            'watch'
        ]);
    });
};
