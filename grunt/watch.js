/*global module */

var watch = {
	sass: {
		files: [
			'source/scss/**/*.scss'
		],
		tasks: [
			"development"
		],
		options: {
			nospawn: true
		}
	}
};

module.exports = watch;
