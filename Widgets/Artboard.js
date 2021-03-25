const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');
var fs  = require('fs');
const Utils = require('../Utils/Utils');

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



        
          }); 









    }




   

}



module.exports = ArtBoard
