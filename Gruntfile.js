module.exports = function (grunt) {
	grunt.initConfig({
      uglify: {
          options: {
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
              src: 'js/**/*.js',
              dest: 'package/js/all.min.js'
          }
      },
      jshint: {
          all: ['js/**/*.js']
      },
      cssmin: {
          target: {
              files: {
                  'package/css/all.min.css': ['css/*.css']
              }
          }
      },
	  jasmine: {
		pivotal: {
		  src: 'js/**/*.js',
		  options: {
			specs: 'spec/*Spec.js',
		  }
		}
	  }
	});
	grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
