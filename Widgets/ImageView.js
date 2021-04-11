const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');

/**
 * ImageView.
 *
 * @class ImageView
 * @extends {Widget}
 */
class ImageView extends Widget{
    

    GenerateWidget() {
         //TODO : Generate ImageView XML CODE

        console.log("Generating ImageView Widget Called!");
        globalBuilderDoc.ele('ImageView')
        .att('android:id', '@+id/text_view_id')
        .att('android:layout_width', 'match_parent')
        .att('android:layout_height', 'wrap_content')
        .att('tools:ignore', 'MissingConstraints')
        

                .up()
       global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });


      }
    
      Parsejsontoxml(element,doc) {
        if(element[".adobeClass"]=="Rectangle"){
              doc.ele('ImageView')
              .att('android:id', '@+id/'+element[".id"])
             .att('android:layout_width',+element["width"]+"dp")
             .att('android:layout_height', +element["height"]+"dp")
             .att('android:src', '@drawable/'+element[".id"])
             .att('app:layout_constraintStart_toStartOf','parent')
             .att('app:layout_constraintTop_toTopOf','parent')
             .att('android:layout_marginStart',element["x"]+"dp")
             .att('android:layout_marginTop',element["y"]+"dp")

              .up()

           
         
             
            }else {
  
              console.log("BUG ON ImageView");
        }
  
             
  
  
        }
  
}



module.exports = ImageView
