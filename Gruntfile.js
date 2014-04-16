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

    config: {
        src: 'src',
        dist: 'dist'
    }
  });

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load grunt tasks "just in time"
    require('jit-grunt')(grunt);

    grunt.loadTasks('grunt/tasks');

    grunt.registerTask('default', [
        'build'
    ]);
};
