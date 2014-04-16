module.exports = function(grunt) {
    'use strict';

    grunt.config('assemble', {
        pages: {
            options: {
                flatten: true,
                assets: '<%= config.dist %>/assets',
                layout: '<%= config.src %>/templates/layouts/default.hbs',
                data: '<%= config.src %>/data/*.{json,yml}',
                partials: '<%= config.src %>/templates/partials/*.hbs',
                plugins: ['assemble-contrib-permalinks','assemble-contrib-sitemap'],
            },
            files: {
                '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
            }
        }
    });
};
