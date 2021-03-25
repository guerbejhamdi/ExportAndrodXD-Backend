const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');

/**
 * Button.
 *
 * @class Button
 * @extends {Widget}
 */
class Button extends Widget{
   
 
      Parsejsontoxml(element,doc) {
      if(element[".adobeClass"]=="Group"){
            doc.ele('Button')
            .att('android:id', 'test')
           // .att('android:layout_width', element["width"]+"dp")
           // .att('android:layout_height', 'wrap_content')
           // .att('android:text',element["text"] )
            //.att('android:textSize',element["fontSize"] )
           // .att('app:layout_constraintStart_toStartOf','parent')
           //// .att('app:layout_constraintTop_toTopOf','parent')
           // .att('android:layout_marginStart',element["x"]+"dp")
           // .att('android:layout_marginTop',element["y"]+"dp")
            .up()
            // android:layout_marginLeft="40dp"
            // android:layout_marginTop="8dp"
           


      }else if(element[".adobeClass"]=="Rectangle"){
            doc.ele('Button')
            .att('android:id', '@+id/'+element[".id"])
            .att('android:layout_width', element["width"]+"dp")
            .att('android:layout_height', 'wrap_content')
            .att('android:text',element[".id"])
            .att('android:textSize',element["fontSize"] )
            .att('app:layout_constraintStart_toStartOf','parent')
            .att('app:layout_constraintTop_toTopOf','parent')
            .att('android:layout_marginStart',element["x"]+"dp")
            .att('android:layout_marginTop',element["y"]+"dp")
            .up()
        


      }else {

            console.log("BUGG");
      }

           



      }

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
