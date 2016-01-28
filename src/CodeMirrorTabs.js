'use strict';

import core from 'metal/src/core';
import CodeMirror from 'steel-codemirror/src/CodeMirror';
import './CodeMirrorTabs.soy';

/**
 * A CodeMirror editor with tabs.
 */
class CodeMirrorTabs extends CodeMirror {
	/**
	 * Handles a `click` event on one of the tab buttons.
	 * @param {!Event} event
	 * @protected
	 */
	handleTabClick_(event) {
		var index = parseInt(event.delegateTarget.getAttribute('data-index'), 10);
		this.selectedTabIndex = index;
	}

	/**
	 * Syncronization logic for the `selectedTabIndex` attribute. Updates the CodeMirror
	 * configuration according to the value determined in `tabConfigs` for the selected tab.
	 */
	syncSelectedTabIndex() {
		this.updateTabConfig();
	}

	/**
	 * Updates the CodeMirror configuration for the currently selected tab according
	 * to the value of the `tabConfigs` attribute, if set.
	 */
	updateTabConfig() {
		this.config = this.tabConfigs && this.tabConfigs[this.selectedTabIndex];
	}
}

/**
 * Attributes definition.
 * @type {!Object}
 * @static
 */
CodeMirrorTabs.ATTRS = {
	/**
	 * Extra content to be placed inside the header.
	 * @type {string|SanitizedHtml}
	 */
	extraHeaderContent: {
	},

	/**
	 * The index of the currently selected tab.
	 * @type {number}
	 * @default 0
	 */
	selectedTabIndex: {
		validator: core.isNumber,
		value: 0
	},

	/**
	 * Optional array with the CodeMirror configuration objects to be used
	 * for each CodeMirror tab.
	 * @type {Array}
	 */
	tabConfigs: {
		validator: Array.isArray
	}
};

/**
 * Default element classes.
 * @type {string}
 * @static
 */
CodeMirrorTabs.ELEMENT_CLASSES = 'codeMirrorTabs';

export default CodeMirrorTabs;
