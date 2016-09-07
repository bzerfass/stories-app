var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');
var path = require('path');

module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		"./src/index.js"
	],
	output: {
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				exclude: /(node_modules)/,
				loaders: ['babel'],
	  		},
			{
				test: /.jsx?$/,
				exclude: /(node_modules)/,
				loaders: ['react-hot', 'babel', 'babel-loader'],
	  		},
	  		{
	  			test: /\.css$/,
	  			loader: "style!css"
	  		}
		],
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new DashboardPlugin()
	]
};
