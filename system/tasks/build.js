module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('build', function(target) {
        if (target === 'scripts') {
            return grunt.task.run([
                'modernizr',
                'concat',
                'clean:tmp',
                'uglify'
            ]);
        } else if (target === 'html') {
            return grunt.task.run([
                'clean:build',
                'assemble',
                'beautify:html'
            ]);
        } else if (target === 'css') {
            return grunt.task.run([
                'compass:dist',
                'cssmin:dist',
                'autoprefixer'
            ]);
        }

        grunt.task.run([
            'build:html',
            'build:css',
            'build:scripts'
        ]);
    });
};
