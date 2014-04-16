module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('build', function(target) {
        if (target === 'scripts') {
            return grunt.task.run([
                'build:preAssets',
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
                'build:preAssets',
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
            'build:html',
            'build:scripts',
            'build:css'
        ]);
    });
};
