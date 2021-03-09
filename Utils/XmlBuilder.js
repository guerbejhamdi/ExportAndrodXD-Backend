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
    var doc = builder.create('androidx.constraintlayout.widget.ConstraintLayout');

    doc.att('xmlns:android', 'http://schemas.android.com/apk/res/android')
    doc.att('xmlns:app', 'http://schemas.android.com/apk/res-auto')
    doc.att('xmlns:tools', 'http://schemas.android.com/tools')
    doc.att('android:layout_width', 'match_parent')
    doc.att('android:layout_height', 'match_parent')
    doc.att('android:layout_height', 'match_parent')
    doc.att('tools:context', '.MainActivity')



global.globalBuilderXmlDocPretty;
global.globalBuilderDoc = doc;
//global.globalBuilderXmlDocPretty = doc.toString({ pretty: true });

//console.log(doc.toString({ pretty: true }));


module.exports = doc
