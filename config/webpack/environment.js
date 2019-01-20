const { environment } = require('@rails/webpacker');
const autoprefixer = require('autoprefixer');
environment.loaders.get('sass').use.find(o => o.loader === 'sass-loader').options.includePaths=["node_modules"];
environment.loaders.get('sass').use.find(o => o.loader === 'postcss-loader').options.plugins = () => [autoprefixer];

module.exports = environment;
