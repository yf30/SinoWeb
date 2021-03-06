var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js', 'html'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'vue-router$': 'vue-router/dist/vue-router.common.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        disableHostCheck: true

    },
    performance: {
        hints: false
    },
    plugins: [

        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"

        })
    ],
    devtool: '#eval-source-map'

}

/* 生产环境的配置 */
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.BannerPlugin('This file is created by toxichl')
    ])
}