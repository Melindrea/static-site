module.exports = function(grunt) {
    'use strict';

    grunt.config('githooks', {
        stage: {
            options: {
                template: 'grunt/hooks/stage.js.hbs'
            },
            'pre-commit': 'commit'
        }
    });
};
