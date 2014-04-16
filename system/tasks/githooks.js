module.exports = function(grunt) {
    'use strict';

    grunt.config('githooks', {
        stage: {
            options: {
                template: 'system/hooks/stage.js.hbs'
            },
            'pre-commit': 'commit'
        }
    });
};
