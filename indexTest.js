


const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
var unzip = require('unzip')


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
  authorize(JSON.parse(content), uploadFile);
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
        console.log(`${file.name} (${file.id})`);
      });
    } else {
      console.log('No files found.');
    }
  });






}



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
    body: fs.createReadStream('./GeneratedProject.zip')
    };
    drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id'
    }, (err, file) => {
    if (err) {
        // Handle error
        console.error(err);
    } else {
        console.log('File Id: ', file.data.id);
        drive.permissions.create({
          fileId: file.data.id,
          requestBody: {
            role: 'reader',
            type: 'anyone',
          }
        });

        const webViewLink =  drive.files.get({
          fileId: file.data.id,
          fields: 'webViewLink'
      }).then(response => 
        console.log(response.data.webViewLink)
      );
      
      
    }
    });

    


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



  /*var fileId = '1CjDR67pphzEMC_EFCysvthps8TCDiXR9';
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
  );*/
  
 




