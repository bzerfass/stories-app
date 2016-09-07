var webpack = require('webpack');

module.exports = {
	entry:
		"./src/index.js",
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel', 'babel-loader'],
	  		},
            {
				test: /\.jsx$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel', 'babel-loader'],
	  		},
	  		{
	  			test: /\.css$/,
	  			loader: "style!css"
	  		}
		],
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
