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
    
      Parsejsontoxml(element,doc) {
        if(element[".adobeClass"]=="Group"){
              doc.ele('EditText')
              .att('android:id', '@+id/'+element[".id"])
             .att('android:layout_width', element["width"]+"dp")
             .att('android:layout_height', 'wrap_content')
             .att('android:hint',element["hint"] )
             .att('android:textColor',"#"+element["textColor"].toString(16) )
             .att('android:textColorHint',"#"+element["textColor"].toString(16) )
             .att('android:textSize',element["fontSize"]+"sp" )
             .att('app:layout_constraintStart_toStartOf','parent')
             .att('app:layout_constraintTop_toTopOf','parent')
             .att('app:layout_constraintEnd_toEndOf','parent')
             .att('android:layout_marginStart',element["x"]+"dp")
             .att('android:layout_marginTop',element["y"]+"dp")
             .att('android:layout_marginEnd',element["marginRight"]+"dp" ) 
              .up()
              // android:layout_marginLeft="40dp"
              // android:layout_marginTop="8dp"
             
  
  
        }else if(element[".adobeClass"]=="Rectangle"){
              doc.ele('Button')
              .att('android:id', '@+id/'+element[".id"])
              .att('android:layout_width', element["width"]+"dp")
              .att('android:layout_height', 'wrap_content')
              .att('android:textSize',element["fontSize"]+"dp" )
              .att('app:layout_constraintStart_toStartOf','parent')
              .att('app:layout_constraintTop_toTopOf','parent')
              .att('app:layout_constraintEnd_toEndOf','parent')
              .att('android:layout_marginStart',element["test-x"]+"dp")
              .att('android:layout_marginTop',element["test-y"]+"dp")
              .att('android:layout_marginEnd',element["marginRight"]+"dp" ) 
              .up()
          
  
  
        }else {
  
              console.log("BUGG ON EDITTEXT");
        }
  
             
  
  
  
        }
  

}



module.exports = EditText
