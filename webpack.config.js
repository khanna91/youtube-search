module.exports = {
	entry : './app.js',
	output : {
		path : './',
		filename : './public/bundle.js'
	},
	devtool: "source-map",
	devServer : {
		inline : true,
		port : 3333
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				exclude : /(node-modules|bower_components)/,
				loader : 'babel-loader',
				query : {
					presets : ['es2015', 'react']
				}
			}
		],
		resolve: {
         	extensions: ['', '.js', '.jsx']
        }
	}
}
