module.exports = function(grunt) {
    grunt.initConfig({
        lint: {
            files: ['index.js']
        }
    });
    grunt.registerTaks('default', 'lint');
    grunt.registerTaks('travis', 'lint');
}