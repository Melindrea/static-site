module.exports = function(grunt) {
    'use strict';

    grunt.config('assemble', {
        pages: {
            options: {
                flatten: true,
                assets: '<%= directories.build.base %>',
                layout: '<%= directories.base %>/templates/layouts/default.hbs',
                data: '<%= directories.base %>/data/*.{json,yml}',
                partials: '<%= directories.base %>/templates/partials/*.hbs',
                plugins: [
                    'assemble-contrib-permalinks',
                    'assemble-contrib-sitemap'
                ],
            },
            files: {
                '<%= directories.build.base %>/': [
                    '<%= directories.base %>/templates/pages/*.hbs'
                ]
            }
        }
    });
};
