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
          let item=doc.ele('ImageView');
              
          item.att('android:id', '@+id/'+element[".id"])
          item.att('android:layout_width',+element["width"]+"dp")
          item.att('android:layout_height', +element["height"]+"dp")
          item.att('android:src', '@drawable/'+element[".id"])
          item.att('app:layout_constraintStart_toStartOf','parent')
          item.att('app:layout_constraintTop_toTopOf','parent')
 
          item.att('android:layout_marginStart',element["x"]+"dp")
          item.att('android:layout_marginTop',element["y"]+"dp")

          if(element["marginRight"]!=undefined){
            item.att('app:layout_constraintEnd_toEndOf','parent');
            item.att('android:layout_marginEnd',element["marginRight"]+"dp" ) ;
           }
            
           if(element["marginBottom"]!=undefined){
            item.att('app:layout_constraintBottom_toBottomOf','parent');
            item.att('android:layout_marginBottom',element["marginBottom"]+"dp" ) ;
          }
     

          item  .up()

           
         
             
            }else {
  
              console.log("BUG ON ImageView");
        }
  
             
  
  
        }
  
}



module.exports = ImageView
