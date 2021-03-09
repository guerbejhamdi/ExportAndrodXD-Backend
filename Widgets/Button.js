const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');

/**
 * Button.
 *
 * @class Button
 * @extends {Widget}
 */
class Button extends Widget{
    

    GenerateWidget() {
        console.log("Generating Button Widget Called!");
        //TODO : Generate Button XML CODE
    
        
              globalBuilderDoc.ele('Button')
          .att('android:id', '@+id/simpleButton')
          .att('android:layout_width', 'wrap_content')
          .att('android:layout_height', 'wrap_content')
          .att('android:text', 'Test')
          .att('tools:ignore','MissingConstraints')
                  .up()

            global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });


      }
    

}



module.exports = Button
