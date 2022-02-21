const { google } = require('googleapis');
const sheets = google.sheets('v4');

const spreadsheetId = "1_go4ANnxoav4GVriBZYrreSbMJPuITguKw6MUDRTRXQ"; 
const sheetName = "Sheet1";
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getToken() {

  const auth = new google.auth.GoogleAuth({
    keyFile: 'keys.json',
    scopes: SCOPES
  });

  const authToken = await auth.getClient();
  return authToken;
}

async function getGoogleSheetValues() {
  try {
    const auth = await getToken();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      auth,
      range: sheetName
    });

    console.log('getGoogleSheetValues:', JSON.stringify(response.data, null, 2));

  } catch (error) {

    console.log(error.message, error.stack);

  }
}

getGoogleSheetValues();