module.exports = function(grunt) {
    'use strict';
    var path = require('path');
    grunt.config('assemble', {
        options: {
            flatten: true,
            assets: '<%= site.assets %>',
            themeTemplates: path.resolve('<%= site.templates %>'),
            layout: '<%= site.layout %>',
            layoutdir: '<%= site.layouts %>',
            data: '<%= directories.content.data %>/*.{json,yml}',
            partials: '<%= site.partials %>',
            helpers: '<%= site.helpers %>',
            plugins: '<%= site.plugins %>',
            sitemap: '<%= site.sitemap %>',
            users: require('../../config/users'),
            site: '<%= site %>',
            permalinks: {
                preset: 'pretty'
            }
        },
        pages: {
            files: {
                '<%= site.dest %>/': [
                    '<%= directories.content.pages %>/*.hbs'
                ]
            }
        },
        posts: {
            options: {
                layout: 'post.hbs',
                permalinks: {
                    structure: ':slug-:00/index.html',
                    patterns: [{
                        pattern: ':slug',
                        replacement: function() {
                            var _ = require('underscore.string');
                            return _.slugify(this.title);
                        }
                    }]
                }
            },
            files: {
                '<%= site.dest %>/posts/': [
                    '<%= directories.content.posts %>/*.hbs'
                ]
            }
        }
    });
};
