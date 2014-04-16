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
                'clean:html',
                'assemble',
                'beautify:html'
            ]);
        } else if (target === 'css') {
            return grunt.task.run([
                'compass:dist',
                'cssmin:dist',
                'autoprefixer'
            ]);
        } else if (target === 'preAssets') {
            return grunt.task.run([
                'clean:assets'
            ]);
        }

        grunt.task.run([
            'build:preAssets',
            'build:html',
            'build:css',
            'build:scripts'
        ]);
    });
};
