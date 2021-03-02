const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');

/**
 * TextView.
 *
 * @class TextView
 * @extends {Widget}
 */
class TextView extends Widget{
    

    GenerateWidget() {
         //TODO : Generate TextView XML CODE

        console.log("Generating TextView Widget Called!");
        globalBuilderDoc.att('android:TextViewTest', 'TextViewWidget Called!')
        global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });

      }
    

}



module.exports = TextView
