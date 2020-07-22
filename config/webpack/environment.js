const { environment } = require('@rails/webpacker');
const autoprefixer = require('autoprefixer');
const typescript = require('./loaders/typescript');
environment.loaders.get('sass').use.find(o => o.loader === 'sass-loader').options.sassOptions.includePaths=["node_modules"];
environment.loaders.get('sass').use.find(o => o.loader === 'sass-loader').options.implementation = require('sass');
environment.loaders.get('sass').use.find(o => o.loader === 'sass-loader').options.webpackImporter = false;
environment.loaders.get('sass').use.find(o => o.loader === 'postcss-loader').options.plugins = () => [autoprefixer];

environment.loaders.append('typescript', typescript);
module.exports = environment;
