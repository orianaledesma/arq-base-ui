const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const WebpackMonitor = require('webpack-monitor');
const argv = require('yargs').argv;

module.exports = merge(common, {
    mode: 'production',
    bail: true,
    devtool: false,
    plugins: [
        new StatsWriterPlugin({
            filename: 'stats.json'
        }),
        new WebpackMonitor({
            capture: true,
            launch: argv.monitor
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
});
