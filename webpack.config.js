var path = require('path')

var config = {
	// context: __dirname + '/src',
	entry: [path.resolve(__dirname, 'src/app.js')],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		// libraryTarget: 'commonjs'
	},
	module: {
		loaders: [{
	      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
	      loader: 'babel', // The module to load. "babel" is short for "babel-loader"
	      query: {
	      	cacheDirectory: true,
	        presets: ['es2015', 'stage-3', 'react']
	      }
	    },{
	      test: /\.scss$/,
	      loader: 'style!css!sass'
	    }],
	},
}

module.exports = config
