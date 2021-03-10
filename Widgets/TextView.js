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
        globalBuilderDoc.ele('TextView')
        .att('android:id', '@+id/text_view_id')
        .att('android:layout_width', 'match_parent')
        .att('android:layout_height', 'wrap_content')
        .att('android:text', 'Tv , Change me')
        .att('tools:ignore', 'MissingConstraints')

                .up()
       global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });


      }
    
      Parsejsontoxml(element) {
        console.log("TextView");

    }
}



module.exports = TextView
