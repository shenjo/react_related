module.exports = {
    entry: './index.js',
    output: {
        filename: './[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    }
};


