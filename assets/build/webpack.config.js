const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV;
const paths = require('../../paths');

function entry() {
    return {
        main: paths.EXPERIENSA_ASSETS + '/scripts/main.js',
        admin: paths.EXPERIENSA_ASSETS + '/scripts/admin.js',
        vendor: [
            'jquery'
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
            loaders: ['babel-loader'],
            exclude: [paths.NODEMOUDLES_PATH]
        },
    ]
}
function plugins() {
    return [
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: true,
        //     compress: { warnings: false }
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),

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
    plugins: plugins()
};

// console.log(webpackConfig)
module.exports = webpackConfig;