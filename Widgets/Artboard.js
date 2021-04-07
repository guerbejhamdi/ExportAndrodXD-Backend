const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');
const dotenv = require('dotenv');

var fs  = require('fs');
const Utils = require('../Utils/Utils');


var dirCopyPath = __dirname + process.env.DIR_COPYPATH ;
var dirPastPath = __dirname + process.env.DIR_PAST_PATH;
var dirPastLivePath = __dirname + process.env.DIR_PASTLIVE_PATH;

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

        var doc = builder.create('androidx.constraintlayout.widget.ConstraintLayout');

        doc.att('xmlns:android', 'http://schemas.android.com/apk/res/android')
        doc.att('xmlns:app', 'http://schemas.android.com/apk/res-auto')
        doc.att('xmlns:tools', 'http://schemas.android.com/tools')
        doc.att('android:layout_width', 'match_parent')
        doc.att('android:layout_height', 'match_parent')
        doc.att('android:layout_height', 'match_parent')
        doc.att('tools:context', '.MainActivity')
        if(artBoard["background"]!=null){
          doc.att('android:background', "#"+artBoard["background"].toString(16))
        }



      doc.toString({ pretty: true })


       artBoard.children.forEach(element => {

        Utils.ParseByAndroidClass(element,element[".class"],doc);
            
    });

    doc =doc.toString({ pretty: true })
    var test = __dirname +process.env.DIR_PATH_ARTBOARD+artBoard["name"];
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









    }




   

}



module.exports = ArtBoard
