module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    }
	});

  // Load the plugins
  grunt.loadNpmTasks('grunt-sass');

  // default task
  grunt.registerTask('default', ['sass']);
};