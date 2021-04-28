const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');
const dotenv = require('dotenv');

var fs  = require('fs');
const Utils = require('../Utils/Utils');


var dirCopyPath = __dirname + process.env.DIR_COPYPATH ;
var dirCopyPathShapes = __dirname + process.env.DIR_COPYPATH_SHAPES ;

var dirPastPath = __dirname + process.env.DIR_PAST_PATH;
var dirPastLivePath = __dirname + process.env.DIR_PASTLIVE_PATH;
var dirPastLiveShapesPath = __dirname + process.env.DIR_PASTLIVE_SHAPES_PATH;


dotenv.config({
    path: './config/config.env'
  });
  

/**
 * ArtBoard.
 *
 * @class ArtBoard
 * @extends {Widget}
 */
class ArtBoard extends Widget{


    Parsesontoxml(artBoard) {

      if(artBoard["isScrollable"]==true){
        // var doc = builder.create('ScrollView')
        // .att('xmlns:android', 'http://schemas.android.com/apk/res/android')
        // .att('xmlns:app', 'http://schemas.android.com/apk/res-auto')
        // .att('xmlns:tools', 'http://schemas.android.com/tools')
        // .att('android:layout_width', 'match_parent')
        // .att('android:layout_height', artBoard["scrollViewtHeight"]+"dp")
        // .ele('title', { 'type': 'text'}, ' ').up()
        // .ele('androidx.constraintlayout.widget.ConstraintLayout', { 'android:layout_width': 'match_parent','android:layout_height':'match_parent'},' ').up();

        // doc.ele('androidx.constraintlayout.widget.ConstraintLayout')
        // .att('android:layout_width', 'match_parent')
        // .att('android:layout_height', 'match_parent');

        var doc = builder.create('androidx.constraintlayout.widget.ConstraintLayout');
        doc.att('android:layout_width', 'match_parent');
        doc.att('android:layout_height', 'match_parent');
        doc.att('android:background','#'+artBoard["background"].toString(16)) 
    
        

      }else {

       


        var doc = builder.create('androidx.constraintlayout.widget.ConstraintLayout');
        doc.att('xmlns:android', 'http://schemas.android.com/apk/res/android');
        doc.att('xmlns:app', 'http://schemas.android.com/apk/res-auto');
        doc.att('xmlns:tools', 'http://schemas.android.com/tools');
        doc.att('android:layout_width', 'match_parent');
        doc.att('android:layout_height', 'match_parent'); 
        doc.att('tools:context', '.MainActivity');
        doc.att('android:background','#'+artBoard["background"].toString(16)) 
        


      }

      
      // var shapeDoc = builder.create('shape');
      // shapeDoc.att('xmlns:android', 'http://schemas.android.com/apk/res/android')
      // shapeDoc.att('android:shape', 'rectangle')
      // shapeDoc.att('android:padding', '15dp')
        
        // if(artBoard["background"]!=null){
        //   shapeDoc.att('android:background', "#"+artBoard["background"].toString(16))
        // } 

  

        doc.toString({ pretty: true })
       

       artBoard.children.forEach(element => {

        Utils.ParseByAndroidClass(element,element[".class"],doc);
            
      });
      
      
      /* }).after(()=>{
      if(artBoard["isScrollable"]==true){

        doc.up();

      }




    });*/

    if(artBoard["isScrollable"]==true){

      var scrollView = builder.create('ScrollView')
        .att('xmlns:android', 'http://schemas.android.com/apk/res/android')
        .att('xmlns:app', 'http://schemas.android.com/apk/res-auto')
        .att('xmlns:tools', 'http://schemas.android.com/tools')
        .att('android:layout_width', 'match_parent')
        .att('android:layout_height', artBoard["scrollViewtHeight"]+"dp");

        doc=scrollView.importDocument(doc);


    }
    // var test = builder.create('test').att("key","value");
    // //test.com("hello");

    // doc=test.importDocument(doc);
    doc =doc.toString({ pretty: true })
    // shapeDoc=shapeDoc.toString({ pretty: true })



    var test = __dirname +process.env.DIR_PATH_ARTBOARD+artBoard["name"];
    var testShape = __dirname +process.env.DIR_PATH_SHAPES+"Shape"+artBoard["name"];

    console.log(test);
        fs.writeFile(test, doc, function(err) {

            if(err) { return console.log(err); } 
            console.log("The xml file was saved!".blue.underline.bold);

                //COPYING FILES AFTER GENERATION
        
          fs.copyFile(dirCopyPath+artBoard["name"], dirPastLivePath+artBoard["name"], (err) => {
             if (err) throw err;
             console.log(dirCopyPath);
             console.log(dirPastLivePath+artBoard["name"]);
             console.log('XML was copied to project layout folder!'.blue.underline.bold );
           });

        
          }); 




          // fs.writeFile(testShape, shapeDoc, function(err) {

          //   if(err) { return console.log(err); } 
          //   console.log("The shapes xml file was saved!".red.underline.bold);

          //       //COPYING FILES AFTER GENERATION
          //       fs.copyFile(dirCopyPathShapes+"Shape"+artBoard["name"], dirPastLiveShapesPath+"Shape"+artBoard["name"], (err) => {
          //         if (err) throw err;
          //         console.log(dirCopyPathShapes);
          //         console.log(dirPastLiveShapesPath+artBoard["name"]);
          //         console.log('SHAPE XML was copied to project drawable folder!'.green.underline.bold );
          //       });
        
          // }); 




    }




   

}



module.exports = ArtBoard
