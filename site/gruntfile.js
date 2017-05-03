//For now Link Checkers not working
module.exports = function(grunt){
	
	//load plugins
	//'grunt-link-checker',
	[
			'grunt-cafe-mocha',
			'grunt-contrib-jshint',
			'grunt-exec',
	].forEach(function(task){
			grunt.loadNpmTasks(task);
	});
	
	//configure plugins
	grunt.initConfig({
			
			cafemocha:{
					all: {src: 'qa/test-*.js', options: { ui: 'tdd' }, }
			},
			jshint: {
					app:['app.js', 'public/js/**/*.js',
							'lib/**/*.js'],
					qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
			},
			exec: {
					linkchecker:{ cmd: 'linkchecker http://localhost:8888' }
},
	});
	
	// register tasks
	grunt.registerTask('default', ['cafemocha','jshint']);
	
};