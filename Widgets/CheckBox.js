const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');
const dotenv = require('dotenv');
var fs  = require('fs');

/**
 * CheckBox.
 *
 * @class CheckBox
 * @extends {Widget}
 */
class CheckBox extends Widget{

    GenerateWidget() {
        console.log("Generating CheckBox Widget Called!");
        //TODO : Generate CheckBox XML CODE
        globalBuilderDoc.ele('CheckBox')
        .att('android:id', '@+id/plain_text_input')
        .att('android:layout_width', 'match_parent')
        .att('android:layout_height', 'wrap_content')
        .att('android:gravity', 'center_horizontal')
        .att('tools:ignore', 'MissingConstraints')
                .up()

          global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });

      }
      /*{
         ".class": "CheckBox",
                    ".adobeClass": "Group",
                    ".id": "idCheck",
                    "text": "remember me",
                    "fontFamily": "Helvetica Neue",
                    "fontStyle": "Regular",
                    "fontSize": 20,
                    "textColor": 4292401368,
                    "charSpacing": 0,
                    "textAlign": "left",
                    "x": 112,
                    "y": 573,
                    "marginRight": 293,
                    "width": 23,
                    "height": 26,
                    "background": 4294967295,
                    "cornerRadius": {
                        "topLeft": 0,
                        "topRight": 0,
                        "bottomRight": 0,
                        "bottomLeft": 0
    },*/
    
      Parsejsontoxml(element,doc) {

        var testShape = __dirname +process.env.DIR_PATH_SHAPES+"shape"+element[".id"]+".xml";
            var dirCopyPath = __dirname + process.env.DIR_COPYPATH ;
            var dirPastLivePath = __dirname + process.env.DIR_PASTLIVE_PATH;
            var dirPastLiveShapesPath = __dirname + process.env.DIR_PASTLIVE_SHAPES_PATH;
            var test = __dirname +process.env.DIR_PATH_ARTBOARD+element[".id"]+".xml";
            var dirCopyPathShapes = __dirname + process.env.DIR_COPYPATH_SHAPES ;


        if(element[".adobeClass"]=="Group"){
              doc.ele('CheckBox')
              .att('android:id', '@+id/'+element[".id"])
             .att('android:layout_width', element["width"]+'dp')
             .att('android:layout_height', element["height"]+'dp')
             .att('android:text',element["text"])
             .att('android:textSize',element["fontSize"]+"dp" )
             .att('android:textColor',"#"+element["textColor"].toString(16) )
     
             .att('app:layout_constraintStart_toStartOf','parent')
             .att('app:layout_constraintTop_toTopOf','parent')
             .att('app:layout_constraintEnd_toEndOf','parent')
             .att('android:layout_marginStart',element["x"]+"dp")
             .att('android:layout_marginTop',element["y"]+"dp")
             .att('android:layout_marginEnd',element["marginRight"]+"dp" )
              .up()
              // android:layout_marginLeft="40dp"
              // android:layout_marginTop="8dp"
             
  
  
        }else {
  
              console.log("BUGG ON CheckBox");
        }


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
  
             
  
  
  
        }

        
  

}



module.exports = CheckBox