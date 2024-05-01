const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const jwt = require('jsonwebtoken');
const User = require('../model/student_user');
const secrets = require('../config/config');

// Load credentials from file
// const credentials = JSON.parse(fs.readFileSync('credentials.json'));
const config = require('../config/config');
const { default: axios } = require('axios');
const oAuth2Client = new google.auth.OAuth2(
    config.google_client_id, config.google_clientSecret, config.google_callbackUrl);
oAuth2Client.apiKey = secrets.gmail_api;

const listMessages = async (req, res) => {
    const token = jwt.decode(req.params.token, secrets.passport_jwt);
    if(token){
        res.status(300).json({message:"Enter login again"});
    }
    const userId = token.userDetail.id;

    // return if not user found

    const user = await User.findById(userId);
    console.log(user.gmail_fetch_creds);
    

    let obj = {
        access_token: user.gmail_fetch_creds.accessToken,
        refresh_token: user.gmail_fetch_creds.refreshToken
    }

    oAuth2Client.setCredentials(obj);
    const gmail = google.gmail({ version: 'v1',  auth: oAuth2Client });

    try {
        const resp = await gmail.users.messages.list({
            userId: 'me',
        });

        const messages = resp.data.messages;

        if (messages.length === 0) {
            return res.status(200).json({
                message: "no messages found!"
            })
        }

        let emails = [];
        let count = 0;

        for(const message of messages){
            if(count == 10){
                break;
            }

            const msg = await gmail.users.messages.get({
                userId: 'me',
                id: message.id,
                format: 'full'
            });
            
            let msg_body = ''

            const snippet = msg.data.snippet;
            const headers = msg.data.payload.headers;
            const subjectHeader = headers.find(header => header.name === 'Subject');
            const title = subjectHeader ? subjectHeader.value : 'Untitled';
            const senderHeader = headers.find(header => header.name === 'From');
            const sender = senderHeader ? senderHeader.value : 'Unknown Sender';

            if ('data' in msg.data.payload.body) {
                const data = msg.data.payload.body.data;
                msg_body = Buffer.from(data, 'base64').toString('utf-8');
            } else if ('data' in msg.data.payload.parts[0].body) {
                const data = msg.data.payload.parts[0].body.data;
                msg_body = Buffer.from(data, 'base64').toString('utf-8');
            }

            emails.push({
                snippet,
                msg_body,
                title,
                sender
            })

            count += 1;
        }
        
        console.log(emails);

        return res.status(200).json(emails);

    } catch (err) {
        console.error('The API returned an error:', err);
    }
}

module.exports = listMessages;