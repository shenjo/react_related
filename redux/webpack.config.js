module.exports = {
    entry: './src/todolist_example/index.js',
    output: {
        filename: './[name].bundle.js'
    },
    devtool:'inline-source-map',
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


