module.exports = function(grunt) {
    'use strict';

    grunt.config('assemble', {
        pages: {
            options: {
                flatten: true,
                assets: '<%= directories.build.assets %>',
                layout: 'default.hbs',
                layoutdir: '<%= directories.theme.templates %>/layouts',
                data: '<%= directories.content.data %>/*.{json,yml}',
                partials: '<%= directories.theme.templates %>/partials/*.hbs',
                helpers: ['<%= directories.theme.templates %>/helpers/*.js'],
                plugins: [
                    'assemble-contrib-permalinks',
                    'assemble-contrib-sitemap'
                ],
                sitemap: {
                    homepage: '<%= homepage %>',
                    changefreq: 'weekly',
                    relativedest: true,
                    dest: '<%= directories.build.base %>'
                }
            },
            files: {
                '<%= directories.build.base %>/': [
                    '<%= directories.content.pages %>/*.hbs'
                ]
            }
        }
    });
};
