'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'codeMirrorTabs.css',
	bundleFileName: 'codeMirrorTabs.js',
	globalName: 'steel',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'steel-codeMirrorTabs'
});
