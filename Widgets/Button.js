const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');
const dotenv = require('dotenv');

var fs  = require('fs');
/**
 * Button.
 *
 * @class Button
 * @extends {Widget}
 */
class Button extends Widget{
   
 
      Parsejsontoxml(element,doc,shapeDoc) {
            var testShape = __dirname +process.env.DIR_PATH_SHAPES+"shape"+element[".id"]+".xml";
            var dirCopyPath = __dirname + process.env.DIR_COPYPATH ;
            var dirPastLivePath = __dirname + process.env.DIR_PASTLIVE_PATH;
            var dirPastLiveShapesPath = __dirname + process.env.DIR_PASTLIVE_SHAPES_PATH;
            var test = __dirname +process.env.DIR_PATH_ARTBOARD+element[".id"]+".xml";
            var dirCopyPathShapes = __dirname + process.env.DIR_COPYPATH_SHAPES ;





      if(element[".adobeClass"]=="Group"){
            doc.ele('android.widget.Button')
            .att('android:id', '@+id/'+element[".id"])
           .att('android:layout_width', element["width"]+"dp")
           .att('android:layout_height', 'wrap_content')
           .att('android:text',element["text"])
           .att('android:backgroundTint',"#"+element["background"].toString(16) )
           .att('android:textColor',"#"+element["textColor"].toString(16) )

            .att('android:textSize',element["fontSize"]+"dp" )
           .att('app:layout_constraintStart_toStartOf','parent')
           .att('app:layout_constraintTop_toTopOf','parent')
           .att('app:layout_constraintEnd_toEndOf','parent')
           .att('android:layout_marginStart',element["x"]+"dp")
           .att('android:layout_marginTop',element["y"]+"dp")
           .att('android:layout_marginEnd',element["marginRight"]+"dp" ) 
           .att('android:background','@drawable/shape'+element[".id"])
            .up()
            // android:layout_marginLeft="40dp"
            // android:layout_marginTop="8dp"
           


      }else if(element[".adobeClass"]=="Rectangle"){
            doc.ele('android.widget.Button')
            .att('android:id', '@+id/'+element[".id"])
            .att('android:layout_width', element["width"]+"dp")
            .att('android:layout_height', element["height"]+"dp")
            .att('android:backgroundTint',"#"+element["background"].toString(16) )
            .att('app:layout_constraintStart_toStartOf','parent')
            .att('app:layout_constraintTop_toTopOf','parent')
            .att('app:layout_constraintEnd_toEndOf','parent')
            .att('android:layout_marginStart',element["x"]+"dp")
            .att('android:layout_marginTop',element["y"]+"dp")
           .att('android:layout_marginEnd',element["marginRight"]+"dp" ) 
            .att('android:background','@drawable/shape'+element[".id"])
            .up()

      }else if(element[".adobeClass"]=="Text") {

            console.log("Not YET ");

      }else{

            console.log("BUGG ON BUTTON");

      }

   
      // if(element["cornerRadius"]['bottomRight']!=0 && element["cornerRadius"]['bottomLeft']!=0 &&
      //    element["cornerRadius"]['topLeft']!=0 && element["cornerRadius"]['topRight']!=0){

     





      var shapeDoc = builder.create('shape');
      shapeDoc.att('xmlns:android', 'http://schemas.android.com/apk/res/android')
      shapeDoc.att('android:shape', 'rectangle')
      shapeDoc.att('android:padding', '15dp')



      shapeDoc.com('Background Color')
      shapeDoc.ele('solid')
      .att('android:color',"#"+element["background"].toString(16) )


      shapeDoc.com('Border Color')
      shapeDoc.ele('stroke')
      .att('android:width',"2dp" )
      .att('android:color',"#000000" )




      shapeDoc.ele('corners')
      .att('android:bottomRightRadius',element["cornerRadius"]['bottomRight']+"dp")
      .att('android:bottomLeftRadius',element["cornerRadius"]['bottomLeft']+"dp")
      .att('android:topLeftRadius',element["cornerRadius"]['topLeft']+"dp")
      .att('android:topRightRadius',element["cornerRadius"]['topRight']+"dp")
      .up()


      shapeDoc=shapeDoc.toString({ pretty: true }) ;

      fs.writeFile(testShape, shapeDoc, function(err) {

            if(err) { return console.log(err); } 
            console.log("The shapes xml file was saved!".red.underline.bold);

                //COPYING FILES AFTER GENERATION
                fs.copyFile(dirCopyPathShapes+"shape"+element[".id"]+".xml", dirPastLiveShapesPath+"shape"+element[".id"]+".xml", (err) => {
                  if (err) throw err;
                  console.log(dirCopyPathShapes);
                  console.log(dirPastLiveShapesPath+element[".id"]);
                  console.log('SHAPE XML was copied to project drawable folder!'.green.underline.bold );
                });
        
          }); 




      // }


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
