'use strict';

import dom from 'metal/src/dom/dom';
import CodeMirrorTabs from '../src/CodeMirrorTabs';

describe('CodeMirrorTabs', function() {
	var codeMirrorTabs;

	afterEach(function() {
		codeMirrorTabs.dispose();
	});

	it('should render buttons for each tab', function() {
		codeMirrorTabs = new CodeMirrorTabs({
			tabs: ['Tab 1', 'Tab 2', 'Tab 3']
		}).render();

		var tabElements = codeMirrorTabs.element.querySelectorAll('button');
		assert.strictEqual(3, tabElements.length);
		assert.strictEqual('Tab 1', tabElements[0].textContent);
		assert.strictEqual('Tab 2', tabElements[1].textContent);
		assert.strictEqual('Tab 3', tabElements[2].textContent);
	});

	it('should select first tab automatically if no selectedTabIndex is specified', function() {
		codeMirrorTabs = new CodeMirrorTabs({
			tabs: ['Tab 1', 'Tab 2', 'Tab 3']
		}).render();

		var tabElements = codeMirrorTabs.element.querySelectorAll('button');
		assert.strictEqual(0, codeMirrorTabs.selectedTabIndex);
		assert.ok(dom.hasClass(tabElements[0], 'codeMirrorTabs-tab-selected'));
		assert.ok(!dom.hasClass(tabElements[1], 'codeMirrorTabs-tab-selected'));
		assert.ok(!dom.hasClass(tabElements[2], 'codeMirrorTabs-tab-selected'));
	});

	it('should select a tab when it\'s clicked', function(done) {
		codeMirrorTabs = new CodeMirrorTabs({
			tabs: ['Tab 1', 'Tab 2', 'Tab 3']
		}).render();

		var tabElements = codeMirrorTabs.element.querySelectorAll('button');
		dom.triggerEvent(tabElements[1], 'click');

		codeMirrorTabs.once('attrsChanged', function() {
			assert.strictEqual(1, codeMirrorTabs.selectedTabIndex);

			tabElements = codeMirrorTabs.element.querySelectorAll('button');
			assert.ok(!dom.hasClass(tabElements[0], 'codeMirrorTabs-tab-selected'));
			assert.ok(dom.hasClass(tabElements[1], 'codeMirrorTabs-tab-selected'));
			assert.ok(!dom.hasClass(tabElements[2], 'codeMirrorTabs-tab-selected'));
			done();
		});
	});

	it('should set CodeMirror\'s options according to tabsConfig for the first selected tab', function() {
		codeMirrorTabs = new CodeMirrorTabs({
			tabConfigs: [
				{
					value: 'Content 1'
				},
				{
					value: 'Content 2'
				},
				{
					value: 'Content 3'
				}
			],
			tabs: ['Tab 1', 'Tab 2', 'Tab 3']
		}).render();

		assert.strictEqual('Content 1', codeMirrorTabs.getCodeMirror().getValue());
	});

	it('should change CodeMirror\'s options according to tabsConfig when set', function(done) {
		codeMirrorTabs = new CodeMirrorTabs({
			tabConfigs: [
				{
					value: 'Content 1'
				},
				{
					value: 'Content 2'
				},
				{
					value: 'Content 3'
				}
			],
			tabs: ['Tab 1', 'Tab 2', 'Tab 3']
		}).render();

		var tabElements = codeMirrorTabs.element.querySelectorAll('button');
		dom.triggerEvent(tabElements[1], 'click');

		codeMirrorTabs.once('attrsChanged', function() {
			codeMirrorTabs.once('attrsChanged', function() {
				assert.strictEqual('Content 2', codeMirrorTabs.getCodeMirror().getValue());
				done();
			});
		});
	});
});
