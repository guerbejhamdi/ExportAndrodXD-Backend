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
            var shapename = "shape"+element[".id"]+".xml";
            var shapetolower = shapename.toLowerCase()
            var testShape = __dirname +process.env.DIR_PATH_SHAPES+shapetolower;
            var dirCopyPath = __dirname + process.env.DIR_COPYPATH ;
            var dirPastLivePath = __dirname + process.env.DIR_PASTLIVE_PATH;
            var dirPastLiveShapesPath = __dirname + process.env.DIR_PASTLIVE_SHAPES_PATH;
            var test = __dirname +process.env.DIR_PATH_ARTBOARD+element[".id"]+".xml";
            var dirCopyPathShapes = __dirname + process.env.DIR_COPYPATH_SHAPES ;





      if(element[".adobeClass"]=="Group"){
            let item= doc.ele('android.widget.Button');
            item.att('android:id', '@+id/'+element[".id"]);
            item.att('android:layout_width', element["width"]+"dp");
            item.att('android:layout_height', 'wrap_content');
            item.att('android:text',element["text"]);
            item.att('android:backgroundTint',"#"+element["background"].toString(16) );
            item.att('android:textColor',"#"+element["textColor"].toString(16) );
            item.att('android:textSize',element["fontSize"]+"dp" );
            item.att('app:layout_constraintStart_toStartOf','parent');
            item.att('app:layout_constraintTop_toTopOf','parent');
            item.att('android:layout_marginStart',element["x"]+"dp");
            item.att('android:layout_marginTop',element["y"]+"dp");
            if(element["marginRight"]!=undefined){
            item.att('app:layout_constraintEnd_toEndOf','parent');
            item.att('android:layout_marginEnd',element["marginRight"]+"dp" ) ;
                   }
            
           if(element["marginBottom"]!=undefined){
            item.att('app:layout_constraintBottom_toBottomOf','parent');
            item.att('android:layout_marginBottom',element["marginBottom"]+"dp" ) ;
             }
       
             var shapenamexml = "shape"+element[".id"];
             var shapexmltolower = shapenamexml.toLowerCase()
 
            item.att('android:background','@drawable/'+shapexmltolower);
            item.up();
            // android:layout_marginLeft="40dp"
            // android:layout_marginTop="8dp"
           


      }else if(element[".adobeClass"]=="Rectangle"){
          let item=  doc.ele('android.widget.Button');
        

            item.att('android:id', '@+id/'+element[".id"]);
            item.att('android:layout_width', element["width"]+"dp");
            item.att('android:layout_height', element["height"]+"dp");
            item.att('android:backgroundTint',"#"+element["background"].toString(16) );
            item.att('app:layout_constraintStart_toStartOf','parent');
            item.att('app:layout_constraintTop_toTopOf','parent');
          
            item.att('android:layout_marginStart',element["x"]+"dp");
            item.att('android:layout_marginTop',element["y"]+"dp");

            if(element["marginRight"]!=undefined){
                  item.att('app:layout_constraintEnd_toEndOf','parent');
                  item.att('android:layout_marginEnd',element["marginRight"]+"dp" ) ;
                 }
                  
                 if(element["marginBottom"]!=undefined){
                  item.att('app:layout_constraintBottom_toBottomOf','parent');
                  item.att('android:layout_marginBottom',element["marginBottom"]+"dp" ) ;
                }

                var shapenamexml = "shape"+element[".id"];
                var shapexmltolower = shapenamexml.toLowerCase()
    
           
            item.att('android:background','@drawable/'+shapexmltolower);
            item.up();
          

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
                fs.copyFile(dirCopyPathShapes+shapetolower, dirPastLiveShapesPath+shapetolower, (err) => {
                  if (err) throw err;
                  console.log(dirCopyPathShapes);
                  console.log(shapetolower)
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
