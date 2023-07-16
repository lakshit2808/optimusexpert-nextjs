import { google } from 'googleapis';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { First_Name, Last_Name, Email, Phone_Number, Company_Name, Number_of_Emp, Message } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: "db-for-oe@optimus-expert-db.iam.gserviceaccount.com" ,
        client_id: process.env.CLIENT_ID,
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDIugfGLHNzZn45\nU+/6aKYKlIO9k5SEoBDKZC7+3X6JBnEI+JSmtMfXoRgETS4UNgJA5dbnEjvV7Sz2\nfIIZHtb5Fvs/hqaXzOraHdcsvIrFlhhNDZWr1Q1D7B7sm+ui44vPFONd74ujKg29\nWGfcEj0Mlei7R6jveP8GvWk5mO68ImbdMYDliadeNnH3hNJElkI+6x2yQnEoOk4Y\noiTwmT1HisBREUPtVu92WrX4aEmMDQ2rJ+vrHN0/KF/buwQv6AgDRjqPZa3C29jN\novHRakMVLBrLye12PUpAJKeggkdbu11t2AjpZfKkrvr+F1Pz0jPjLk02tLy86j2W\nN20975zHAgMBAAECggEAPNW43nSBZxPEpK5OWJfX3vQE+3Nbe1ihzh1P6vmJTJEx\nt/TS5LV8rdsKkt8rXH/D7hRarfymOt9flbLFoURqBeNTsXynR/GYqhOKL+pSqrCj\nW9MGriXrl87bzn0xDNSm/lOH12Pu77winuTI0XeLniFfAEenKTEEJfBJEGZL0KOY\n1AdnYdeAK48XnZpE7Velg3lVihR/8UODnEf7lQQECUUyGby8dK4IvdWmhTtP48l/\njcYIfZke1gx3zNUduEiwdAhnIf+c9vDbQYAlv+PJha/ILhv5gDal+fzi0mUU84vO\nDBdH+TNyuaIfNO2PA62WGDN5t3vroZj1ls5K3Y3PoQKBgQDx6b9zqyTg8Lj0/VT6\n2GHxHUwFMA6vwN6gkpBMcY+cT4i2upcUsF56jrULIqkDT2BRiIul79/N7SuU9v2V\naSt22lNWGkM8nCtmYja2MCnOb+Z9g3b2X6l2KoEbte6hYcGNILdbUxgBb34OzTbS\nytRSnek6aP9oHr1yzvmrLLN/JwKBgQDUak7G1XOacc3zFF15JcK+jde3GPxKABHB\nv6Ku5fVVwpNC8w1ET+dui8jzppIQ5W7lvHKgeiHDOu0DLJhVCf85Tu7yRNtp0RrQ\naWGVbkiGabJlXd8xHDvPSCG6ffwp/9FIxBkhht8RpBLjRXg0Rsn0ZmfQ1W7rKBaf\nDN32FnV5YQKBgQDMr9dKa5j8qzIUOPXaeZQFi6BzE0KZ+ztj6h8mT0AQJkurMR38\nZ27JjE4radxP7K22zy457UkU2IRzuri93wrjub+hrv8NHaarLpbUeNQm1A/WS5Iw\nzKh6T2SGqd2Lt0cpvnDmWNyK+mdS5thoay5T6UEaJxVUaA4sQmyGJYCLKQKBgQDQ\nk+bw5a5TjMZ/l5LFoCefd6bHmxg5DeJhzuxPM215nct+pS1008VcTpSvc/Pf9Xq0\nyhwAqoy2qQkM4eBfOKbOPkzxxl1xhav/1ErHMfizS9yqHshH8AJm4tyDxKw1DYcT\nHcPToR0vtF37nz6OjqhGfbwZW0tETCQSX88gkyMdYQKBgQCR+TaED1k/14wT2PL/\nunG3ygaCJrya5wBP0TQ6zwNlq6MqV3bgWOsjhTaIRwDKIAmsj6hUQsQa37DIV6Ms\nVoVM5RYDXZaXdJCygRkgxPLA98PyFXSa0mKwdsgPok007HwtDllngwWjr7f6a3co\nuMhD0AAkJQpW5C9cDHzZdXiKDg==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: "1y-hlf4q1wrBBA0xs0VG4lqcuGwdkKzjvNoShDqorpCI",
      range: 'ContactUs!A1:G1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[First_Name, Last_Name, Email, Phone_Number, Company_Name, Number_of_Emp, Message]],
      },
    });

    res.status(201).json({ message: 'It works!', response });
  }
  res.status(200).json({ message: 'Optimus Expert Form Detail' });
}

export default handler;
