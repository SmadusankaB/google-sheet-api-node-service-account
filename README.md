# google-sheet-api-node-service-account

This is a simple node script to read Google Sheets using Google Sheet API with a Service Account

## Prerequisite

* Node installed
* NPM installed
* Google cloud console project
* Google service account and private key
* A Google sheet and sharing it with email address which is associated with Service account
* Enable Google Sheet API

## How to run

```ssh
npm i
node index.js
```

## Sample output

```ssh
getGoogleSheetValues:
 {
  "range": "Sheet1!A1:Z1000",
  "majorDimension": "ROWS",
  "values": [
    [
      "ID",
      "Value"
    ],
    [
      "1",
      "6"
    ],
    [
      "2",
      "9"
    ]
  ]
}
```
