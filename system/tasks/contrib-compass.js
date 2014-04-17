module.exports = function(grunt) {
    'use strict';

    grunt.config('compass', {
        options: {
            sassDir: '<%= directories.assets.styles %>',
            cssDir: '<%= site.assets %>/styles',
            generatedImagesDir: '<%= site.assets %>/images/generated',
            imagesDir: '<%= directories.base %>/media/images',
            javascriptsDir: '<%= site.assets %>/scripts',
            fontsDir: '<%= directories.assets.fonts %>',
            httpImagesPath: '/assets/media/images',
            httpGeneratedImagesPath: '/assets/images/generated',
            importPath: '<%= directories.bower %>',
            httpFontsPath: '/assets/fonts',
            relativeAssets: false,
            outputStyle: 'expanded',
            require: [
                'breakpoint',
                'sass-globbing'
            ]
        },
        dist: {
            options: {
                generatedImagesDir: '<%= site.assets %>/images/generated',
                noLineComments: true
            }
        },
        lint: {
            options: {
                cssDir: '.tmp',
                noLineComments: false
            }
        }
    });
};
