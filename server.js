const express = require('express')
const app = express()
const colors = require('colors');
var builder = require('xmlbuilder');
var fs  = require('fs');
const bodyParser = require("body-parser");
const XmlBuilder = require('./Utils/XmlBuilder');
const logger = require('./Utils/Logger');


var dirPath = __dirname + "/public/xmlfiles/desingtocode.xml";
var dirPathLog = __dirname + "/public/xmlfiles/logs.txt";


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var http = require('http');
const Button = require('./Widgets/Button');
const EditText = require('./Widgets/EditText');
const TextView = require('./Widgets/TextView');

const port = process.env.PORT || 3000;

app.get("/ExportToXml",(req,res)=>{
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
    
    //
    //TESTING XML BUILDER

    var builder = require('xmlbuilder');
    var doc = builder.create('Button', {
    encoding: "UTF-8",
    stringify: {
        elEscape: escapeFunc,
    }
});

//Testing before using the request data
doc.att('android:id', '@+id/simpleButton')
.att('android:layout_width', 'wrap_content')
.att('android:layout_height', 'wrap_content')
.att('android:text', 'Test')
.end({ 
    pretty: true,
    newline: "\r\n",
    dontPrettyTextNodes: true,
});

//console.log(doc.toString({ pretty: true }));

//init xml file
var xmldoc = doc.toString({ pretty: true }); 

//Writing file to dir
fs.writeFile(dirPath, xmldoc, function(err) {

    if(err) { return console.log(err); } 

    console.log("The xml file was saved!".blue.underline.bold);

  //  res.render('index', { title: 'Generate XML using NodeJS' });

  }); 

  //TRYING TO USER LOGGE
  logger.info(logResult);


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



fs.readFile('credentials.json', (err, data) => {
    if (err) throw err;
    let test = JSON.parse(data);
    console.log(test.installed.client_id.yellow.underline.bold);
    var js2xmlparser = require("js2xmlparser");
    var obj = data ;
    console.log(js2xmlparser.parse("person", obj));
});

/*var js2xmlparser = require("js2xmlparser");
 
var obj = {
    "firstName": "John",
    "lastName": "Smith",
    "dateOfBirth": new Date(1964, 7, 26),
    "address": {
        "@": {
            "type": "home"
        },
        "streetAddress": "3212 22nd St",
        "city": "Chicago",
        "state": "Illinois",
        "zip": 10000
    },
    "phone": [
        {
            "@": {
                "type": "home"
            },
            "#": "123-555-4567"
        },
        {
            "@": {
                "type": "cell"
            },
            "#": "890-555-1234"
        },
        {
            "@": {
                "type": "work"
            },
            "#": "567-555-8901"
        }
    ],
    "email": "john@smith.com"
};
 
console.log(js2xmlparser.parse("person", obj));*/





console.log('This is after the read call');

//testing widgets calls

    new Button().GenerateWidget(); 
    new EditText().GenerateWidget(); 
    new TextView().GenerateWidget(); 

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
   new TextView().GenerateWidget(); 
   console.log(globalBuilderXmlDocPretty);
   res.send('Got a POST request from the buildere');
});  





//Testing get request before applying global changes!


//

app.listen(port,console.log(`ExportAndroXD Server running on port:${port} ` .red.underline.bold));