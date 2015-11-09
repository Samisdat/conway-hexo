/*global module */

var sass = {
    development: {
        options: {
            sourceMap: true
        },
        files: {
            'source/css/<%= pkg.name %>.css' : 'source/scss/<%= pkg.name %>.scss',
        }
    },
    production: {
        options: {
            sourceMap: false,
            outputStyle:'compressed'
        },
        files: {
          'source/css/<%= pkg.name %>.min.css' : 'source/scss/<%= pkg.name %>.min.scss',
        }
    }
};

module.exports = sass;
