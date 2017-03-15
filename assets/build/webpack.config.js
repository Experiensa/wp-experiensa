const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV;
const paths = require('../../paths');

function entry() {
    return {
        main: paths.EXPERIENSA_ASSETS + '/scripts/main.js',
        admin: paths.EXPERIENSA_ASSETS + '/scripts/admin.js',
        catalog: paths.EXPERIENSA_ASSETS + '/scripts/modules/catalog/index.jsx',
        vendor: [
            'jquery'
        ],
        react: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux'
        ]
    }
}
function output() {
    return {
        filename: '[name].js',
        path: paths.EXPERIENSA_DIST
    }
}
function rules(){
    return [
        {
            test: /\.js$/,
            exclude: [paths.NODEMOUDLES_PATH],
            use: [
                {
                    loader: 'babel-loader'
                }
            ]
        },
        {
            test: /\.jsx?$/,
            exclude: [paths.NODEMOUDLES_PATH],
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['es2015', 'react', 'stage-2'],
                        plugins: ['transform-decorators-legacy']
                    }
                }
            ]
            /*loaders: ['babel-loader'],
            query: {
                presets: ['es2015', 'react', 'stage-2'],
                plugins: ['transform-decorators-legacy']
            }*/
        },
    ]
}
function plugins() {
    return [
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: true
        //     }
        // }),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'react_libs'],
            minChunks: Infinity
        })
    ]
}
let devtool = 'inline-source-map';
if(env === 'production'){ devtool = 'hidden-sourcemap' }
const webpackConfig = {
    devtool: devtool,
    entry: entry(),
    output: output(),
    module: {
        rules: rules()
    },
    plugins: plugins(),
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};

// console.log(webpackConfig)
module.exports = webpackConfig;