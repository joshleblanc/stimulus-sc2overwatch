const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const autoprefixer = require('autoprefixer');
console.log(environment.loaders.get('sass'));
environment.loaders.get('sass').use.find(o => o.loader === 'sass-loader').options.includePaths=["node_modules"];
environment.loaders.get('sass').use.find(o => o.loader === 'postcss-loader').options.plugins = () => [autoprefixer];


environment.loaders.append('typescript', typescript)
module.exports = environment;
