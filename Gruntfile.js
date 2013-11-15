module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ['index.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTaks('default', 'jshint');
    grunt.registerTaks('travis', 'jshint');
}