const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');

/**
 * Relativelayout.
 *
 * @class Relativelayout
 * @extends {Widget}
 */
class Relativelayout extends Widget{

    GenerateWidget() {
        console.log("Generating Relativelayout Widget Called!");
        //TODO : Generate Relativelayout XML CODE
        globalBuilderDoc.ele('Relativelayout')
        .att('android:id', '@+id/plain_text_input')
        .att('android:layout_width', 'match_parent')
        .att('android:layout_height', 'wrap_content')
        .att('android:gravity', 'center_horizontal')
        .att('tools:ignore', 'MissingConstraints')
                .up()

          global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });

      }
      /*{
        ".class": "RelativeLayout",
        ".adobeClass": "Line",
        "height": 1,
        "width": 279,
        "x": 74.5,
        "y": 657.5
    },*/
    
      Parsejsontoxml(element,doc) {
        if(element[".adobeClass"]=="Line"){
              doc.ele('RelativeLayout')
             .att('android:layout_width', element["width"]+"dp")
             .att('android:layout_height', element["height"]+"dp")
             .att('android:layout_marginStart',element["x"]+"dp")
             .att('android:layout_marginTop',element["y"]+"dp")
             .att('android:layout_marginEnd',element["marginRight"]+"dp" )
             .att('android:background',"#"+element["color"].toString(16) )
             .att('app:layout_constraintStart_toStartOf','parent')
             .att('app:layout_constraintTop_toTopOf','parent')
             .att('app:layout_constraintEnd_toEndOf','parent')
           
             .up()
          
          
  
  
        }else {
  
              console.log("BUGG ON Relativelayout");
        }
  
             
  
  
  
        }
  

}



module.exports = Relativelayout
