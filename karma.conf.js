'use strict';

var metalKarmaConfig = require('metal-karma-config');

module.exports = function (config) {
	metalKarmaConfig(config);

	config.files.push(
		'node_modules/codemirror/lib/codemirror.js',
		'node_modules/steel-*/src/**/*.js'
	);
	config.preprocessors['node_modules/steel-*/**/*.js'] = ['babel', 'commonjs'];
};
