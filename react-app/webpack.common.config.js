module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules:
            [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/preset-react', '@babel/preset-env'],
                            plugins: [
                                // '@babel/plugin-proposal-class-properties',
                                // '@babel/plugin-syntax-dynamic-import',
                                ["import", { "libraryName": "antd", "style": "css" }]
                            ]
                        }
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[hash].[ext]',
                                publicPath: 'static/dist'
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[hash].[ext]',
                                publicPath: 'static/dist'
                            }
                        }
                    ]
                }
            ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
