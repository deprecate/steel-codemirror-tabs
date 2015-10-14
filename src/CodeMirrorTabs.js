'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './CodeMirrorTabs.soy';

class CodeMirrorTabs extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
}

CodeMirrorTabs.ELEMENT_CLASSES = 'codeMirrorTabs';

ComponentRegistry.register('CodeMirrorTabs', CodeMirrorTabs);

export default CodeMirrorTabs;
