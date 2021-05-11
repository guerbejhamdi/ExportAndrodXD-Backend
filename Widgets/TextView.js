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
            let item=  doc.ele('TextView')
            item.att('android:id', '@+id/'+element[".id"])
            item.att('android:layout_width','wrap_content')
            item.att('android:layout_height', 'wrap_content')
            item.att('android:text',element["text"] )
            item.att('android:textSize',element["fontSize"]+"dp" )
              


            item.att('android:textColor',"#"+element["textColor"].toString(16) )
            item.att('android:letterSpacing',element["charSpacing"] )
            item.att('android:gravity',element["textAlign"] )


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
            item.up()

            //   jsonObj["fontFamily"]=text.fontFamily ;
            //   jsonObj["fontStyle"]=text.fontStyle ;
            //   jsonObj["lineSpacing"]=text.x ;
         
             
            }else {
  
              console.log("BUG ON TEXTVIEW");
        }
  
             
  
  
  
        }
  
}



module.exports = TextView
