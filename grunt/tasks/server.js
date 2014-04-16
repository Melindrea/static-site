module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('server', function() {
        grunt.task.run([
            'clean:dist',
            'build',
            'connect:livereload',
            'watch'
        ]);
    });
};
