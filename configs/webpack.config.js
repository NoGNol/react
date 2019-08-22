const webpack = require('webpack');
const path = require('path');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const rendererConfig = {
    context: path.resolve('./'),
    entry: {
        dapp: [
            "./src/app.tsx"
        ]
    },
    target: 'web',
    output: {
        path: __dirname + '/../build/',
        pathinfo: true,
        filename: '[name].js',
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin({configFile: __dirname + '/tsconfig.json', baseUrl: __dirname + '/src/'})],
        extensions: ['.ts', '.tsx', 'index.tsx', '.js', '.json', '.node', '.html', '.css'],
        modules: ['src', 'node_modules'],
    },
    module: {
        rules:[
            /* {enforce: 'pre', test: /\.ts$/, loader: "tslint-loader", options: {configFile: './configs/tslint.json'}}
           , */ {test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader?' + JSON.stringify({configFile: __dirname + '/tsconfig.json'}) }
        ]
    }

};

module.exports = rendererConfig;
