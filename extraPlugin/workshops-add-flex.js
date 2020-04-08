const {registerPlugin} = require('@scullyio/scully');

function addFlexPlugin(html, route) {
  // If no title in the document
  if (html.indexOf('<custom-flex-box') < 0) {
    
    html = html.replace(/\<\/app\-hero\-section\>/, '</app-hero-section><custom-flex-box>')
    html = html.replace(/\<\/title\>/, 'FOOBAR: </title>')
    html = html.replace(/\<app\-team\-section/, '</custom-flex-box><app-team-section');
    return Promise.resolve(`${html}`);
  }
  return Promise.resolve(html);
}

// DON NOT FORGET REGISTER THE PLUGIN
const validator = async conf => [];
registerPlugin('render', 'addFlex', addFlexPlugin, validator);

module.exports.addFlexPlugin = addFlexPlugin;