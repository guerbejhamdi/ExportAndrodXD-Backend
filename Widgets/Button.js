const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');

/**
 * Button.
 *
 * @class Button
 * @extends {Widget}
 */
class Button extends Widget{
    

    GenerateWidget1(element) {
        console.log("Generating Button Widget Called!");
        //TODO : Generate Button XML CODE
        console.log(element[".adobeClass"])
    
        if(element[".adobeClass"]=="Group"){
            globalBuilderDoc.ele('Button')
            .att('android:id', '@+id/'+element[".id"])
            .att('android:layout_width', element["width"]+"dp")
            .att('android:layout_height', 'wrap_content')
            .att('android:text',element["text"] )
            .att('android:textSize',element["fontSize"] )
            .att('app:layout_constraintStart_toStartOf','parent')
            .att('app:layout_constraintTop_toTopOf','parent')
            .att('android:layout_marginStart',element["x"]+"dp")
            .att('android:layout_marginTop',element["y"]+"dp")
            .up()
            // android:layout_marginLeft="40dp"
            // android:layout_marginTop="8dp"
            global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });


      }else if(element[".adobeClass"]=="Rectangle"){
            globalBuilderDoc.ele('Button')
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
            global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });

      }else {

            console.log("BUGG");
      }

           



      }


      
      // ".class": "Button",
      // ".adobeClass": "Group",
      // ".id": "btn1",
      // "text": "BUTTON",
      // "fontFamily": "Segoe UI",
      // "fontStyle": "Regular",
      // "fontSize": 20,
      // "textColor": 4294011241,
      // "charSpacing": 0,
      // "textAlign": "left",
      // "text-x": 188,
      // "text-y": 709,
      // "width": 190,
      // "height": 49,
      // "background": 4294011241,

 
      Parsejsontoxml(element) {
      if(element[".adobeClass"]=="Group"){
            globalBuilderDoc.ele('Button')
            .att('android:id', '@+id/'+element[".id"])
            .att('android:layout_width', element["width"]+"dp")
            .att('android:layout_height', 'wrap_content')
            .att('android:text',element["text"] )
            .att('android:textSize',element["fontSize"] )
            .att('app:layout_constraintStart_toStartOf','parent')
            .att('app:layout_constraintTop_toTopOf','parent')
            .att('android:layout_marginStart',element["x"]+"dp")
            .att('android:layout_marginTop',element["y"]+"dp")
            .up()
            // android:layout_marginLeft="40dp"
            // android:layout_marginTop="8dp"
            global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });


      }else if(element[".adobeClass"]=="Rectangle"){
            globalBuilderDoc.ele('Button')
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
            global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });


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
