// import { google } from "googleapis";
// import { NextApiRequest, NextApiResponse } from "next";

// type SheetForms = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     company: '',
//     noofemployees: '',
//     phone: '',
//     message: ''
//   }

// export default async function handler (
//     NextApiRequest,
//     NextApiResponse
// )
// {
//     if (req.method !== "POST")
//     {
//         return res.status( statusCode: 405).send(body: {message: "Only POST requests are allowed"})
//     }

//     const body = req.body as SheetForms

//     try{
//         const auth = new google.auth.GoogleAuth(opts: {
//             credentials:{
//                 client_email: process.env.GOOGLE_CLIENT_EMAIL,
//                 private_key:process.env.PRIVATE_KEY?.replace(/\\n/g,"\n")
//             },
//             scopes:[
//                 'https://www.googleapis.com/auth/drive',
//                 'https://www.googleapis.com/auth/drive.file',
//                 'https://www.googleapis.com/auth/spreadsheets'
//             ]
//         });

//         const sheets = google.sheets({
//             auth,
//             version: 'v4'
//         });
        
//         const response = await sheets.spreadsheets.values.append(params: {
//             spreadsheetId: process.env.GOOGLE_SHEET_ID,
//             range: 'A1:G1',
//             valueInputOption: "USER_ENTERED",
//             requestBody: {
//                 values: [
//                     [body.firstName, body.lastName, body.email, body.phone, body.noofemployees, body.message]
//                 ]
//             }
//         });

//         return res.status( statusCode: 200).json(body: {
//             data: response.data
//         })
//     }catch(e){
//         return res.status(statusCode: 500).send(body: {message: e.message ?? "Something Went Wrong"})
//     }
// }