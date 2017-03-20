const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV;
const paths = require('../../paths');

function entry() {
    return {
        main: paths.EXPERIENSA_ASSETS + '/scripts/main.js',
        admin: paths.EXPERIENSA_ASSETS + '/scripts/admin.js',
        catalog: paths.EXPERIENSA_ASSETS + '/scripts/modules/catalog/index.jsx',
        common: [
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
        },
    ]
}
function plugins() {
    return [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common', 'react'],
            minChunks: Infinity
        }),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true,
        //     debug: false
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         screw_ie8: true,
        //         conditionals: true,
        //         unused: true,
        //         comparisons: true,
        //         sequences: true,
        //         dead_code: true,
        //         evaluate: true,
        //         if_return: true,
        //         join_vars: true,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // }),
        new webpack.ProvidePlugin({
            $: "jquery"
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
        modules: [
            paths.NODEMOUDLES_PATH,
            paths.EXPERIENSA_ASSETS + '/scripts/modules/catalog'
        ]
    }
};

// console.log(webpackConfig)
module.exports = webpackConfig;