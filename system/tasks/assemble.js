module.exports = function(grunt) {
    'use strict';
    var path = require('path');
    grunt.config('assemble', {
        options: {
            flatten: true,
            assets: '<%= directories.build.assets %>',
            themeTemplates: path.resolve('<%= directories.theme.templates %>'),
            layout: 'default.hbs',
            layoutdir: '<%= directories.theme.templates %>/layouts',
            data: '<%= directories.content.data %>/*.{json,yml}',
            partials: '<%= directories.theme.templates %>/partials/*.hbs',
            helpers: [
                '<%= directories.theme.templates %>/helpers/*.js',
                'system/helpers/*.js'
            ],
            plugins: [
                'assemble-contrib-permalinks',
                'assemble-contrib-sitemap'
            ],
            sitemap: {
                homepage: '<%= settings.homepage %>',
                changefreq: 'weekly',
                relativedest: true,
                dest: '<%= directories.build.base %>'
            },
            users: require('../../config/users'),
            settings: require('../../config/settings'),
            permalinks: {
                preset: 'pretty'
            }
        },
        pages: {
            files: {
                '<%= directories.build.base %>/': [
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
                '<%= directories.build.base %>/posts/': [
                    '<%= directories.content.posts %>/*.hbs'
                ]
            }
        }
    });
};
