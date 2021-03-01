const express = require('express')
const app = express()
const colors = require('colors');
var builder = require('xmlbuilder');
var fs  = require('fs');
var dirPath = __dirname + "/../public/xmlfiles/desingtocode.xml";


var http = require('http');

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    console.log(req.headers);
    console.log("HOSTNAME : "+req.hostname);
    console.log("METHOD"+req.method);
    console.log("PROTOCOL"+req.protocol);
    console.log("URL"+req.url);


    //
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
.end({ pretty: true,
    newline: "\r\n",
    dontPrettyTextNodes: true,
});

//console.log(doc.toString({ pretty: true }));
var xmldoc = doc.toString({ pretty: true }); 
//
fs.writeFile(dirPath, xmldoc, function(err) {

    if(err) { return console.log(err); } 

    console.log("The xml file was saved!".blue.underline.bold);

  //  res.render('index', { title: 'Generate XML using NodeJS' });

  }); 


//
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('ExportAndroXD Listening...!');
    res.status(200).end();
    


});

app.listen(port,console.log(`ExportAndroXD Server running on port:${port} ` .red.underline.bold));