const express = require('express')
const app = express()
const colors = require('colors');
var builder = require('xmlbuilder');
var fs  = require('fs');
const bodyParser = require("body-parser");
const XmlBuilder = require('./Utils/XmlBuilder');
const logger = require('./Utils/Logger');
const dotenv = require('dotenv');


dotenv.config({
  path: './config/config.env'
});

var dirPath = __dirname + process.env.DIR_PATH ;
var dirPathLog = __dirname + process.env.DIR_PATH_LOG;
var dirPastPath = __dirname + process.env.DIR_PAST_PATH;


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var http = require('http');
const Button = require('./Widgets/Button');
const EditText = require('./Widgets/EditText');
const TextView = require('./Widgets/TextView');
const ArtBoard = require('./Widgets/Artboard');
const { element } = require('./Utils/XmlBuilder');

const port = process.env.PORT || 3000;

app.post("/ExportToXml",(req,res)=>{
    console.log(req.headers);
    console.log("HOSTNAME : "+req.hostname);
    console.log("METHOD"+req.method);
    console.log("PROTOCOL"+req.protocol);
    console.log("URL"+req.url);

    //Fixing space problem
    const escapeFunc = function(str) {
        return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            //.replace(/\r/g, "&#xD;") // can not use this in combination with normalization
            .replace(/\r(?!\n)/g, "&#xD;") // this matches only lonely carriage return characters
            .replace(/\r?\n/g, "\r\n") // normalize newlines
    }
    
    //INITING PROJECT

   
    var builder = require('xmlbuilder');
    var doc = builder.create('androidx.constraintlayout.widget.ConstraintLayout');

    doc.att('xmlns:android', 'http://schemas.android.com/apk/res/android')
    doc.att('xmlns:app', 'http://schemas.android.com/apk/res-auto')
    doc.att('xmlns:tools', 'http://schemas.android.com/tools')
    doc.att('android:layout_width', 'match_parent')
    doc.att('android:layout_height', 'match_parent')
    doc.att('android:layout_height', 'match_parent')
    doc.att('tools:context', '.MainActivity')

  /*  fs.readFile('testtest.json', (err, data) => {
      if (err) throw err;
      let test = JSON.parse(data);
    //  test.ArtBoard[0].children.forEach(element=>{
    //    ParseByAndroidClass(element,element[".class"])
    //  })
     test.ArtBoard.forEach(element=>{
     new ArtBoard().Parsesontoxml(element);
     // ParseByAndroidClass(element,element[".class"])

      console.log(req.body);
    })
    })*/



    //testing from request

        data = req.body
        let test = JSON.parse(JSON.stringify(data));
       test.ArtBoard.forEach(element=>{
       new ArtBoard().Parsesontoxml(element);
  
  
      })
      
      

    //

      function ParseByAndroidClass(element,typeWidget) {
      if(typeWidget=="Button"){
        console.log("eni bouton");
          new Button().Parsejsontoxml(element); 
      }else if (typeWidget=="EditText"){
        // new EditText().GenerateWidget();
      }else if(typeWidget=="TextView"){ 
      //  new TextView().GenerateWidget();
      }else{

        return {};
              // let data={};
              //     data["NOTYPE"]="NOTYPE";
              // return data;
            }

      }

    
//init xml file
var xmldoc = global.globalBuilderXmlDocPretty.toString({ pretty: true }); 

console.log(xmldoc.toString({ pretty: true }));

//Writing file to dir
fs.writeFile(dirPath, xmldoc, function(err) {

    if(err) { return console.log(err); } 
    console.log("The xml file was saved!".blue.underline.bold);

  //  res.render('index', { title: 'Generate XML using NodeJS' });
  
 //COPYING FILES AFTER GENERATION
 
//  fs.copyFile(dirPath, dirPastPath, (err) => {
//     if (err) throw err;
//     console.log(dirPath);
//     console.log(dirPastPath);

//     console.log('XML was copied to project layout folder!'.blue.underline.bold );
//   });


  }); 

  //TRYING TO USER LOGGER
  logger.info(logResult);

  //


//
var logResult = JSON.stringify(req.headers) +"\n"+ req.hostname +"\n"+ req.method +"\n"+ req.protocol +"\n"+ req.url;
//SAVING LOG FILE
  //TRYING TO USER LOGGER

fs.writeFile(dirPathLog, logResult , function(err) {

    if(err) { return console.log(err); } 

    console.log("Simple Log file was saved!".green.underline.bold);
    logger.info(logResult);
    console.log("Advanced Log file was saved!".green.underline.bold);

  //  res.render('index', { title: 'Generate XML using NodeJS' });

  }); 

  //Testing to read json file 


console.log('This is after the read call');

//testing widgets calls

   /* new Button().GenerateWidget(element); 
    new EditText().GenerateWidget(); 
    new TextView().GenerateWidget(); */


//
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>ExportAndroXD Listening...!</h2>');
    res.status(200).end();


});





app.post('/post', function (req, res) {
   
    console.log("Request Data : \n" .yellow.underline.bold+JSON.stringify(req.body));
return res.status(200).json({
    data : req.body
})
  });



  app.post('/builder', function (req, res) {
   // console.log("Request Data : \n" .yellow.underline.bold+JSON.stringify(req.body));
   //new XmlBuilder()
  // new TextView().GenerateWidget(); 
   console.log('Updated XML :'.yellow.underline.bold);
   console.log(globalBuilderXmlDocPretty);
   res.send('Got a POST request from the builder');
});  





//Testing get request before applying global changes!


//

app.listen(port,console.log(`ExportAndroXD Server running on port:${port} ` .red.underline.bold));
