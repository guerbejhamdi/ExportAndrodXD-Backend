const express = require('express')
const app = express()
const colors = require('colors');
var builder = require('xmlbuilder');
var fs  = require('fs');
const bodyParser = require("body-parser");
const XmlBuilder = require('./Utils/XmlBuilder');
const logger = require('./Utils/Logger');
const dotenv = require('dotenv');

const readline = require('readline');
const {google} = require('googleapis');
var unzip = require('unzip')
const child_process = require("child_process");
const request = require('request');
const download = require('download');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


//
var archiver = require('archiver');


//google
// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content), listFiles);
});


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
 function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}


/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
 function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}



/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
 function listFiles(auth) {
  const drive = google.drive({version: 'v3', auth});
  drive.files.list({
    pageSize: 10,
    fields: 'nextPageToken, files(id, name)',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const files = res.data.files;
    if (files.length) {
      console.log('Files:');
      files.map((file) => {
       // console.log(`${file.name} (${file.id})`);
      });
    } else {
      console.log('No files found.');
    }
  });


}


//gen
function generateProject(auth) {
  const drive = google.drive({version: 'v3', auth});
   //TO DELETE LATER
   var fileId = '1CjDR67pphzEMC_EFCysvthps8TCDiXR9';
   var dest = fs.createWriteStream('./GeneratedProjects/AutoGen.zip');
   
   drive.files.get({fileId: fileId, alt: 'media'}, {responseType: 'stream'},
   function(err, res){
       res.data
       .on('end', () => {
           console.log('Android Project Downloaded');
           fs.createReadStream('./GeneratedProjects/AutoGen.zip').pipe(unzip.Extract({ path: './GeneratedProjects/UnzippedProject' }));
   
          
       })
       .on('error', err => {
           console.log('Error', err);
       })
       .pipe(dest);
   }
   );
}

//


    //TESTING HERE
    /**
    * Describe with given media and metaData and upload it using google.drive.create method()
    */ 
     function uploadFile(auth) {
      const drive = google.drive({version: 'v3', auth});
      const fileMetadata = {
      'name': 'GeneratedProject.zip',
      parents: ['1wE8SDJ-nkH9Xy8R9WuhbPCtRJuVbT2-J'],
      'response': 'file.id'
  
      };
      const media = {
      mimeType: 'application/zip',
      body: fs.createReadStream('./GeneratedProjects/UnzippedProject/AutoGen/GeneratedProject.zip')
      };
      drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id'
    },async (err, file) => {
      if (err) {
          // Handle error
          console.error(err);
      } else {
          console.log('File Id: ', file.data.id);
          url_fileid= JSON.parse(JSON.stringify(file.data.id))
          fs.writeFileSync('fileId.txt', url_fileid);
          drive.permissions.create({
            fileId: file.data.id,
            requestBody: {
              role: 'reader',
              type: 'anyone',
            }
          });
  
          const webViewLink =  await drive.files.get({
            fileId: file.data.id,
            fields: 'webViewLink'
        })
        test2 = webViewLink.data.webViewLink
          console.log(webViewLink.data.webViewLink)

         ikhdem= JSON.parse(JSON.stringify(test2))
         fs.writeFileSync('drivelink.txt', ikhdem);


          
          
          
        
        
        

        

      }
      });

  
  }

  
  


//g


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
const { auth } = require('googleapis/build/src/apis/abusiveexperiencereport');

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

  ///
  function downloadFile(auth) {
    const drive = google.drive({version: 'v3', auth});
          var fileId = '1vX_khxdOmNMNxq5yJY7PaC3E19LurQN6';
      var dest = fs.createWriteStream('./ProjectToClient.zip');
  
      drive.files.get(
        { fileId, alt: 'media' },
        { responseType: 'stream' }
      ).then(res => {
        res.data
          .on('end', () => {
            console.log('Done downloading project.');
          })  
          .on('error', err => {
            console.error('Error downloading project.');
          })  
          .pipe(dest);
      }); 


    }

  ///


  app.get('/download', function (req, res) {
   // console.log("Request Data : \n" .yellow.underline.bold+JSON.stringify(req.body));
   //new XmlBuilder()
  // new TextView().GenerateWidget(); 
   console.log('Client Requesting to download project :'.yellow.underline.bold);
//

//reading file id 
try {
  var FILE_ID = fs.readFileSync('fileId.txt','utf-8');
  console.log("THE FILE ID"+FILE_ID);
} catch (error) {
  
}


//
var fileUrl = "https://drive.google.com/uc?export=download&id="+FILE_ID;
var output = "ClientProject.zip";
/*request({url: fileUrl, encoding: null}, function(err, resp, body) {
  if(err) throw err;
  fs.writeFile(output, body, function(err) {
    console.log("file written!");



  });
});*/


//openURL(fileUrl);

//

/*child_process.execSync(`start chrome "https://drive.google.com/uc?export=download&id=14JgieKUsVFLXCC_PsbzLGM4dp2BGKirA"`, {
});*/


  /* // Load client secrets from a local file.
   fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), downloadFile);
  });*/


   res.send(fileUrl);
});  


//
/*const exec = require('child_process').exec;

function openURL(url) {
  let opener;

  switch (process.platform) {
    case 'darwin':
      opener = 'open';
      break;
    case 'win32':
      opener = 'start';
      break;
    default:
      opener = 'xdg-open';
      break;
  }

  return exec(`${opener} "${url.replace(/"/g, '\\\"')}"`);
}*/


//Testing get request before applying global changes!


//Currently in a map , needs to be stored in a file in the future
const  apiKeys = new Map();
apiKeys.set('12345',true);
//

app.get('/GenerateProject',(req,res,next) => {
  const apiKey = req.get('X-API-KEY');
  if(apiKeys.has(apiKey)){
    next();
  }else{
    const error = new Error('Invalid API KEY')
    next(error);
  }
},function(req,res){

    // Load client secrets from a local file.
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), generateProject);
  });

  res.send('Request to generate a project');

});




app.get('/GetProject', function(req,res){


  /*var output = fs.createWriteStream('GeneratedProject.zip');
  var archive = archiver('zip');
  
  output.on('close', function () {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
  });
  
  archive.on('error', function(err){
      throw err;
  });
  
  archive.pipe(output);
  
  // append files from a sub-directory, putting its contents at the root of archive
  //archive.directory(source_dir, false);
  
  // append files from a sub-directory and naming it `new-subdir` within the archive
  archive.directory('./GeneratedProjects/UnzippedProject/AutoGen/', false);

  
  archive.finalize();*/

  //converting
  child_process.execSync(`zip -r GeneratedProject *`, {
    cwd: './GeneratedProjects/UnzippedProject/AutoGen/'
  });

//uploading here

//

//uploading to google drive
// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content),uploadFile);
  

 
try {
  var dataa = fs.readFileSync('drivelink.txt','utf-8');
  console.log(dataa);
} catch (error) {
  
}
res.send(dataa);


  
});









});



/*
//
const requesting = require("supertest");

app.post("/both", async function(req, res) {
    const server = requesting(req.app);
    const gen = await server.get("/GenerateProject");
    const exportxml = await server.post("/ExportToXml");

    res.json({
      gen: gen.body,
    });
});

//*/


app.get('/', function (req, res) {

  res.sendFile((__dirname + '/index.html'));

});

app.listen(port,console.log(`ExportAndroXD Server running on port:${port} ` .red.underline.bold));
