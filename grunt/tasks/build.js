module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('build', function(target, type) {
        if (target === 'html') {
            return grunt.task.run([
                'assemble'
            ]);
        }

        grunt.task.run([
            'clean:html',
            'build:html'
        ]);
    });
};
