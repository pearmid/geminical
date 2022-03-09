var fs = require("fs");
var readline = require("readline");
var {google} = require("googleapis");
var googleAuth = require("google-auth-library");
var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
var TOKEN_DIR =
  (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) +
  "/.credentials/";
var TOKEN_PATH = TOKEN_DIR + "calendar-nodejs-quickstart.json";
// We need things such as our client ID and secret, which we can read from a file
const googleSecrets = {
  client_id: "369998400419-sh827o2ms2t3570om697lb13pmrjdrcf.apps.googleusercontent.com",
  client_secret: "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",
  redirect_uris: ["http://127.0.0.1/"],
}

console.log(googleSecrets);
// Create an OAuth2 client which we use to generate an auth URL
// and exchange the code for a token
var oauth2Client = new googleAuth.OAuth2Client(
  googleSecrets.client_id,
  googleSecrets.client_secret,
  googleSecrets.redirect_uris[0]
);

// try to use existing creds
const token = fs.readFileSync(TOKEN_PATH);
oauth2Client.setCredentials(JSON.parse(token));
 

if (! token) {
    
    // Generate an authentication URL for us to visit
    var authUrl = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });
    console.log("Authorize this app by visiting this url: ", authUrl);
    // Once we have a token, save it
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Enter the code from that page here: ", function (code) {
      rl.close();
      // may need to uri decode the code here
      let c = decodeURI(code)
      console.log("just a test");
      oauth2Client.getToken(c, function (err, token) {
        if (err) {
          console.log(
            "Error while trying to retrieve access token:",
            err.response.data.error_description
          );
          return;
        }
        try {
          fs.mkdirSync(TOKEN_DIR);
        } catch (err) {
          if (err.code != "EEXIST") {
            throw err;
          }
        }
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
        console.log("Your credentials have been written to", TOKEN_PATH);
      });
    });
}


var calendar = google.calendar("v3");

/*
calendar.calendarList.list({ auth: oauth2Client }, function (err, resp) {
  resp.data.items.forEach(function (cal) {
    console.log(cal.summary + " - " + cal.id);
  });
});
*/


calendar.events.list(
  {
    auth: oauth2Client,
    //calendarId: "jody.pearson@gmail.com",
    calendarId: "iaumdgierbr6g0ck86l7hmnqi4@group.calendar.google.com",
    timeMin: "2022-03-01T00:00:00.000Z",
    timeMax: "2022-03-10T23:59:59.000Z",
  },
  function (err, response) {
    if (err) {
      console.log("The API returned an error: " + err);
      return;
    }
    var events = response.data.items;
    events.forEach(function (event) {
      try {
        var start = event.start.dateTime || event.start.date;
        console.log(event);
      } catch(err) {
        //
      }

    });
  }
);