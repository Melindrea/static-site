module.exports = function(grunt) {
    'use strict';
    var path = require('path');
    grunt.config('assemble', {
        pages: {
            files: {
                '<%= site.pages.dest %>': '<%= site.pages.files %>'
            }
        },
        posts: {
            options: {
                layout: '<%= site.posts.options.layout %>',
                permalinks: '<%= site.posts.options.permalinks %>'
            },
            files: {
                '<%= site.posts.dest %>': '<%= site.posts.files %>'
            }
        },
        options: {
            flatten: true,
            assets: '<%= site.assets %>',
            themeTemplates: path.resolve('<%= site.templates %>'),
            layout: '<%= site.layout %>',
            layoutdir: '<%= site.layouts %>',
            data: '<%= site.data %>',
            partials: '<%= site.partials %>',
            helpers: '<%= site.helpers %>',
            plugins: '<%= site.plugins %>',
            sitemap: '<%= site.sitemap %>',
            users: '<%= users %>',
            site: '<%= site %>',
            permalinks: '<%= site.permalinks.default %>'
        }
    });
};
