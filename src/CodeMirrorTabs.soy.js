/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from CodeMirrorTabs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.CodeMirrorTabs.
 */

if (typeof Templates.CodeMirrorTabs == 'undefined') { Templates.CodeMirrorTabs = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.CodeMirrorTabs.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="codeMirrorTabs component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + Templates.CodeMirrorTabs.header(opt_data, null, opt_ijData) + '<textarea></textarea></div>');
};
if (goog.DEBUG) {
  Templates.CodeMirrorTabs.content.soyTemplateName = 'Templates.CodeMirrorTabs.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.CodeMirrorTabs.header = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header" class="codeMirrorTabs-header">';
  var selectedIndex__soy14 = opt_data.selectedTabIndex ? opt_data.selectedTabIndex : 0;
  var tabList15 = opt_data.tabs;
  var tabListLen15 = tabList15.length;
  for (var tabIndex15 = 0; tabIndex15 < tabListLen15; tabIndex15++) {
    var tabData15 = tabList15[tabIndex15];
    output += '<button class="codeMirrorTabs-tab' + soy.$$escapeHtmlAttribute(selectedIndex__soy14 == tabIndex15 ? ' codeMirrorTabs-tab-selected' : '') + ' btn-transparent" data-index="' + soy.$$escapeHtmlAttribute(tabIndex15) + '" type="button" data-onclick="handleTabClick_">' + soy.$$escapeHtml(tabData15) + '</button>';
  }
  output += soy.$$escapeHtml(opt_data.extraHeaderContent != null ? opt_data.extraHeaderContent : '') + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.CodeMirrorTabs.header.soyTemplateName = 'Templates.CodeMirrorTabs.header';
}

Templates.CodeMirrorTabs.content.params = ["id"];
Templates.CodeMirrorTabs.header.params = ["extraHeaderContent","id","tabs","selectedTabIndex"];

class CodeMirrorTabs extends Component {
  static setImpl(ctor) {
    ComponentRegistry.register(ctor, 'CodeMirrorTabs');
  }
}
CodeMirrorTabs.RENDERER = SoyRenderer;
CodeMirrorTabs.setImpl(CodeMirrorTabs);
SoyAop.registerTemplates('CodeMirrorTabs');
export default CodeMirrorTabs;
/* jshint ignore:end */
