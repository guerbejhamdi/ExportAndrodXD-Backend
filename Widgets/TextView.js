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
    
      Parsejsontoxml(element,doc) {
        if(element[".adobeClass"]=="Text"){
              doc.ele('TextView')
              .att('android:id', '@+id/'+element[".id"])
             .att('android:layout_width','wrap_content')
             .att('android:layout_height', 'wrap_content')
             .att('android:text',element["text"] )
             .att('android:textSize',element["fontSize"] )
              


             .att('android:textColor',element["textColor"].toString(16) )
             .att('android:letterSpacing',element["charSpacing"] )
             .att('android:gravity',element["textAlign"] )





             .att('app:layout_constraintStart_toStartOf','parent')
             .att('app:layout_constraintTop_toTopOf','parent')
             .att('android:layout_marginStart',element["x"]+"dp")
             .att('android:layout_marginTop',element["y"]+"dp")
              .up()

            //   jsonObj["fontFamily"]=text.fontFamily ;
            //   jsonObj["fontStyle"]=text.fontStyle ;
            //   jsonObj["lineSpacing"]=text.x ;
         
             
            }else {
  
              console.log("BUG ON TEXTVIEW");
        }
  
             
  
  
  
        }
  
}



module.exports = TextView
