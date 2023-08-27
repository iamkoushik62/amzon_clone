/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51NIOP6SCrdLU0oeZAQwjRzBpmtmm9mE6XWoPCeTw8W3cXEvuIscmXxbVonOLd98EUVG0WcP13pRnfRBgR2P9LViY00xutXrT5N')


const app = express();
app.use(cors({origin:true}));
app.use((express.json()));
app.get('/',(request,response)=>response.status(200).send('hello world'))
app.post('/payments/create',async (request,response)=>{
    const total = request.query.total

    console.log('payment request recieve',total)

    const paymentIntent = await stripe.paymentIntent.create({
     amount:total,
     currency:"uid"
    });
    response.status(201).send({
        clientScreat: paymentIntent.client_screat,
        
    })
})
exports.api  = functions.https.onRequest(app);
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
