const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

const assistant = new AssistantV2({
  version: "2020-05-15",
  authenticator: new IamAuthenticator({
    apikey: process.env.KEY,
  }),
  url: process.env.URL_WATSON,
  headers: {
    "X-Watson-Learning-Opt-Out": "true",
  },
  disableSslVerification: true,
});

module.exports = assistant;
