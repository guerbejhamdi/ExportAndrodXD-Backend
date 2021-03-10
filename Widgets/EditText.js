const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');

/**
 * EditText.
 *
 * @class EditText
 * @extends {Widget}
 */
class EditText extends Widget{
    

    GenerateWidget() {
        console.log("Generating EditText Widget Called!");
        //TODO : Generate EditText XML CODE
        globalBuilderDoc.ele('EditText')
        .att('android:id', '@+id/plain_text_input')
        .att('android:layout_width', 'match_parent')
        .att('android:layout_height', 'wrap_content')
        .att('android:inputType', 'text')
        .att('android:hint', 'Change Me')
        .att('android:gravity', 'center_horizontal')
        .att('tools:ignore', 'MissingConstraints')

                .up()

          global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });

      }
    
      Parsejsontoxml(element) {
          console.log("EditText");

    }

}



module.exports = EditText
