/*
 * Generated on 2014-04-16
 * generator-assemble v0.4.11
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: require('./package'),
        bower: require('./bower'),
        users: {
            Melindrea: {
                twitter: 'melindrea82',
                displayName: 'Marie Hogebrandt',
                google: 'https://plus.google.com/107792424782860612529?rel=author',
                email: 'iam@mariehogebrandt.se'
            }
        },
        homepage: 'http://melindrea.github.io/static-site',
        theme: 'default',
        deploy: {
            'build_branch': 'gh-pages',
            dist: '<%= directories.build.base %>'
        },
        directories: {
            base: 'content',
            theme: {
                base: '<%= directories.base %>/themes/<%= theme %>',
                templates: '<%= directories.theme.base %>/templates'
            },
            content: {
                base: '<%= directories.base %>/content',
                data: '<%= directories.content.base %>/data',
                pages: '<%= directories.content.base %>/pages',
                posts: '<%= directories.content.base %>/posts'
            },
            assets: {
                base: '<%= directories.theme.base %>/assets',
                js: '<%= directories.assets.base %>/scripts',
                styles: '<%= directories.assets.base %>/styles',
                fonts: '<%= directories.assets.base %>/fonts'
            },
            build: {
                base: '.dist',
                assets: '<%= directories.build.base %>/assets'
            },
            bower: 'bower_components'
        },
        files: {
            js: [
                'Gruntfile.js',
                'system/{,*/}*.js',
                '<%= directories.assets.js %>/**/*.js',
                '!<%= directories.assets.js %>/vendor/*',

            ],
            json: [
                '*.json',
                '<%= directories.content.data %>/{,*/}*.json'
            ],
            styles: [
                '<%= directories.assets.styles %>/{,*/}*.scss',
                '<%= directories.bower %>/typeplate/{,*/}*.scss',
            ]
        }
    });

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load grunt tasks "just in time"
    require('jit-grunt')(grunt);

    grunt.loadTasks('system/tasks');
};
