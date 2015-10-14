/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
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
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="codeMirrorTabs component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '"></div>');
};
if (goog.DEBUG) {
  Templates.CodeMirrorTabs.content.soyTemplateName = 'Templates.CodeMirrorTabs.content';
}

Templates.CodeMirrorTabs.content.params = ["id"];
export default Templates.CodeMirrorTabs;
/* jshint ignore:end */
