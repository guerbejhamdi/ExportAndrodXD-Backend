const Widget = require('../Widgets/Widget');
var builder = require('xmlbuilder');
const dotenv = require('dotenv');

var fs  = require('fs');
const Utils = require('../Utils/Utils');
const JavaGen = require('../Utils/JavaGen');


var dirCopyPath = __dirname + process.env.DIR_COPYPATH ;
var dirCopyPathShapes = __dirname + process.env.DIR_COPYPATH_SHAPES ;

var dirPastPath = __dirname + process.env.DIR_PAST_PATH;
var dirPastLivePath = __dirname + process.env.DIR_PASTLIVE_PATH;
var dirPastLiveShapesPath = __dirname + process.env.DIR_PASTLIVE_SHAPES_PATH;

var dirPastJavaTxtPath = __dirname + process.env.DIR_PASTE_JAVATXT_PATH;
var dirPastJavaClassPath = __dirname + process.env.DIR_PASTE_JAVACLASS_PATH;


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
        doc.att('android:layout_width', 'match_parent');
        doc.att('android:layout_height', 'match_parent');
        doc.att('android:background','#'+artBoard["background"].toString(16)) 
    
     

        doc.toString({ pretty: true })
 
        global.codeActivity = "" ;
        global.importActivity = "" ;
        global.attributeActivity = "" ;
        global.intentsActivity="";

       artBoard.children.forEach(element => {

     Utils.ParseByAndroidClass(element,element[".class"],doc);
            
      });
      

 


  
      var scrollView = builder.create('ScrollView')
        .att('xmlns:android', 'http://schemas.android.com/apk/res/android')
        .att('xmlns:app', 'http://schemas.android.com/apk/res-auto')
        .att('xmlns:tools', 'http://schemas.android.com/tools')
        .att('android:fillViewport', 'true')
        .att('android:layout_width', 'match_parent')
        .att('android:layout_height', 'match_parent');

        doc=scrollView.importDocument(doc);


     doc =doc.toString({ pretty: true })



    var test = __dirname +process.env.DIR_PATH_ARTBOARD+artBoard["name"];


 
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



/*
      //default version1.
      fs.copyFile('./BaseActivity.txt', dirPastJavaTxtPath+artBoard["name"].replace('.xml','')+"Activity.txt", (err) => {
        if (err) 
            throw err;
        console.log('Java txt copied!');
      });*/
      const code=codeActivity;
      const importCode=importActivity;
      const attributes=attributeActivity;
      const intents=intentsActivity;



      fs.readFile('./BaseActivity.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(/BaseActivity/g, capitalizeFirstLetter(artBoard["name"].replace('.xml','')+"Activity"))
        .replace(/activity_name/g, artBoard["name"].replace('.xml',''))
        ;

          result=result.replace("//code",code);
          result=result.replace("//attributes",attributes);
          result=result.replace("//import",importCode);
          result=result.replace("//intents",intents);
          
          
        
         codeActivity = "" ;
         importActivity = "" ;
         attributeActivity = "" ;
         intentsActivity="";
      
        fs.writeFile(dirPastJavaClassPath+capitalizeFirstLetter(artBoard["name"].replace('.xml','')+"Activity.java"), result, 'utf8', function (err) {
           if (err) return console.log(err);

           
      // fs.copyFile(dirPastJavaTxtPath+artBoard["name"].replace('.xml','')+"Activity.java", dirPastJavaClassPath+capitalizeFirstLetter(artBoard["name"].replace('.xml','')+"Activity.java"), (err) => {
      //   if (err) 
      //       throw err;

      //   console.log('Java class copied!');
      // });

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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = ArtBoard
