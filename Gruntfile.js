module.exports = function (grunt) {
	grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
          options: {
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
              src: 'js/**/*.js',
              dest: 'package/all.min.js'
          }
      },
      jshint: {
          all: ['js/**/*.js']
      },
      cssmin: {
          target: {
              files: {
                  'package/all.min.css': ['css/*.css']
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
    grunt.loadNpmTasks('grunt-shell');

    grunt.task.registerTask('package', 'generate deploy package...', function () {
        grunt.config.set('shell.target.command', 'rm -rf package/*; cp index.html package/; cp -rf img/ package/; cat index.html | sed "s/js\\/init.js/all.min.js/gi" | sed "s/css\\/base\\.css/all.min.css/gi" | sed "s/<script.* src=\\"js\\/.*//gi" > package/index.html; ');
        //    | sed "s/<script.* src=\\"js\/.*//gi" | sed "s/css\\/base\\.css/all.min.css/gi" > package/index.html;');
        grunt.task.run(['shell', 'uglify', 'cssmin']);
    });
};
