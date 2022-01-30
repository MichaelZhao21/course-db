const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const serviceAccount = require('./permissions.json');
const busboy = require('busboy');

// Initialize express app
const app = express();
app.use(cors({ origin: true }));

// Initialize firestore database
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://fir-api-9a206..firebaseio.com',
});
const db = admin.firestore();

app.get('/', async (req, res) => {
    res.send('Hello world!');
});

//create the courses
app.post('/courses', async (req, res) => {
    try {
        const id = req.body.name.replace(/ /g, '+').toLowerCase();
        await db
            .collection('courses')
            .doc(id)
            .set({ professor: req.body.professor, name: req.body.name });

        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//get the course from the id given
app.get('/courses/:item_id', async (req, res) => {
    try {
        const document = db.collection('courses').doc(req.params.item_id);
        let item = await document.get();
        let response = item.data();
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

// get all courses
app.get('/courses', (req, res) => {
    (async () => {
        try {
            let query = db.collection('courses');
            let response = [];
            await query.get().then((querySnapshot) => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        professor: doc.data().professor,
                        name: doc.data().name,
                    };
                    response.push(selectedItem);
                }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.post("/files", function (req, res) {
  console.log('POST request');
    const bb = busboy({ headers: req.headers });
    bb.on('file', (name, file, info) => {
      const { filename, encoding, mimeType } = info;
      console.log(
        `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
        filename,
        encoding,
        mimeType
      );
      file.on('data', (data) => {
        console.log(`File [${name}] got ${data.length} bytes`);
      }).on('close', () => {
        console.log(`File [${name}] done`);
      });
    });
    bb.on('field', (name, val, info) => {
      console.log(`Field [${name}]: value: %j`, val);
    });
    bb.on('close', () => {
      console.log('Done parsing form!');
      res.writeHead(303, { Connection: 'close', Location: '/' });
      res.end();
    });
    req.pipe(bb);
});

exports.app = functions.https.onRequest(app);
