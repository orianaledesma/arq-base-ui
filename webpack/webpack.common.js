const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

require('dotenv').config();

module.exports = {
    entry: path.join(__dirname, '../src/index.jsx'),
    devtool: false,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            // disable type checker - we will use it in fork plugin
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sourceMapContents: false
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
    },
    externals: {
        // global app config object | apiUrl is a Mock data and apiJava is My SpringBoot BackEnd
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000',
            // I don`t have this external ¬¬
            apiJavaUrl: 'http://localhost:8080'
        })
    },
    plugins: [
        new webpack.DefinePlugin({
            CONFIG: {
                CONNECT_TO_DEV_TOOLS: JSON.stringify(
                    process.env.CONNECT_TO_DEV_TOOLS
                ),
                ENVIRONMENT: JSON.stringify(process.env.ENVIRONMENT)
            }
        }),
        //THIS CLEAN THE DIST FOLDER
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '..')
        }),
        new ForkTsCheckerWebpackPlugin({
            useTypescriptIncrementalApi: true,
            tslint: true
        }),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[hash].css',
            chunkFilename: '[hash].css'
        }),
        new CopyPlugin([
            {
                from: path.join(__dirname, '../src/assets/favicon.ico'),
                to: path.join(__dirname, '../dist')
            }
        ])
    ]
};
