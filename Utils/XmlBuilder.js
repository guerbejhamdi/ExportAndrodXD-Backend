var builder = require('xmlbuilder');
const express = require('express')
const app = express()
    //Fixing space problem
    const escapeFunc = function(str) {
        return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            //.replace(/\r/g, "&#xD;") // can not use this in combination with normalization
            .replace(/\r(?!\n)/g, "&#xD;") // this matches only lonely carriage return characters
            .replace(/\r?\n/g, "\r\n") // normalize newlines
    }
 
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
global.globalBuilderXmlDocPretty;
global.globalBuilderDoc = doc;
//global.globalBuilderXmlDocPretty = doc.toString({ pretty: true });

//console.log(doc.toString({ pretty: true }));


module.exports = doc
