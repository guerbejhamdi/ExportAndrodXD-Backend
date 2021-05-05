const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');

/**
 * Switch.
 *
 * @class Switch
 * @extends {Widget}
 */
class Switch extends Widget{

    GenerateWidget() {
        console.log("Generating Switch Widget Called!");
        //TODO : Generate Switch XML CODE
        globalBuilderDoc.ele('Switch')
        .att('android:id', '@+id/plain_text_input')
        .att('android:layout_width', 'match_parent')
        .att('android:layout_height', 'wrap_content')
        .att('android:gravity', 'center_horizontal')
        .att('tools:ignore', 'MissingConstraints')
                .up()

          global.globalBuilderXmlDocPretty = globalBuilderDoc.toString({ pretty: true });

      }
      /*{
        ".class": "Switch",
                    ".adobeClass": "Group",
                    ".id": "switch",
                    ".width": "wrap_content",
                    ".height": "wrap_content",
                    "text": "click here",
                    "fontFamily": "Helvetica Neue",
                    "fontStyle": "Regular",
                    android:fontStyle
                    "fontSize": 20,
                    "textColor": 4292401368,
                    "charSpacing": 0,
                    "textAlign": "left",
                    "x": 68,
                    "y": 682,
                    "marginRight": 312,
                    "width": 48,
                    "height": 15,
                    "background": 4289243304,
                    "cornerRadius": {
                        "topLeft": 20,
                        "topRight": 20,
                        "bottomRight": 20,
                        "bottomLeft": 20
    },*/
    
      Parsejsontoxml(element,doc) {
        if(element[".adobeClass"]=="Group"){
              doc.ele('Switch')
              .att('android:id', '@+id/'+element[".id"])
             .att('android:layout_width', element["width"])
             .att('android:layout_height', element["height"])
             .att('android:text',element["text"])
             .att('android:fontFamily',element["fontFamily"])
             .att('android:fontStyle',element["fontStyle"])
             .att('android:textSize',element["fontSize"]+"dp" )
             .att('android:textColor',"#"+element["textColor"].toString(16) )
             .att('android:letterSpacing',element["charSpacing"] )
             .att('android:ltextAlign',element["textAlign"] )
             .att('android:layout_marginStart',element["x"]+"dp")
             .att('android:layout_marginTop',element["y"]+"dp")
             .att('android:layout_marginEnd',element["marginRight"]+"dp" )
             .att('android:background','@drawable/shape'+element[".id"])
              .up()
              // android:layout_marginLeft="40dp"
              // android:layout_marginTop="8dp"
             
  
  
        }else {
  
              console.log("BUGG ON Relativelayout");
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



module.exports = Switch