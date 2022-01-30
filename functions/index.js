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

//******************// 
//*CREATING COURSE*//
//******************// 

/* EXAMPLE JSON INPUT 

{
	"name" : "Kim is Cool",
	"item" : "second item"
}

post http://localhost:5001/course-db-22/us-central1/app/courses

*/

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

//******************// 
//****GET COURSE****//
//******************// 

/*

get http://localhost:5001/course-db-22/us-central1/app/courses/kim+is+cool

*/

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

//******************// 
//**GET ALL COURSE**//
//******************// 

/*

get http://localhost:5001/course-db-22/us-central1/app/courses

*/


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

////////////////////////////////////////////////////////////////////////////////

//*********************// 
//*CREATING ASSIGNMENT*//
//*********************// 

/* EXAMPLE JSON FILE

{
    "dateTime" : 1644858671000,
    "assignment" : "homework 3"
}

post http://localhost:5001/course-db-22/us-central1/app/todoList

*/

//create the assignment
app.post('/todoList', async (req, res) => {
  try {
    const id = req.body.assignment.replace(/ /g, '+').toLowerCase();
      await db
          .collection('todoList')
          .doc(id)
          .set({ dateTime: Number(req.body.dateTime), assignment: req.body.assignment, daysUntil: -1 });
      return res.status(200).send();
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
  }
});

//*********************// 
//**UPDATE ASSIGNMENT**//
//*********************// 

/*

put http://localhost:5001/course-db-22/us-central1/app/todoList/homework+3

*/

// update
app.put('/todoList/:assignment_id', async (req, res) => {
    try {
        var now = new Date().getTime();
        const document = db.collection('todoList').doc(req.params.assignment_id);
        let assignment = await document.get();
        let response = assignment.data().dateTime;
        let days = Math.ceil(((response - now) / (60*60*24*1000)));
        await document.update({
            daysUntil: days
        });
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//*********************// 
//***GET ASSIGNMENT****//
//*********************// 

/*

get http://localhost:5001/course-db-22/us-central1/app/todoList/homework+3

*/


//get the assignment from the id given
app.get('/todoList/:assignment_id', async (req, res) => {
  try {
      const document = db.collection('todoList').doc(req.params.assignment_id);
      let assignment = await document.get();
      let response = assignment.data();
      return res.status(200).send(response);
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
  }
});














exports.app = functions.https.onRequest(app);
