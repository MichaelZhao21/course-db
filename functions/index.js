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
app.post('/todos', async (req, res) => {
    try {
        const id = req.body.name.replace(/ /g, '+').toLowerCase();
        await db
            .collection('todos')
            .doc(id)
            .set({
                dateTime: Number(req.body.dateTime),
                name: req.body.name,
                dueIn: calcDue(Number(req.body.dateTime)),
                courseId: req.body.courseId,
            });
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

/**
 * Calculate due until time
 *
 * @param {number} datetime The UTC date time string
 * @return {number} Days from now until datetime
 */
const calcDue = (datetime) => Math.ceil((datetime - new Date().getTime()) / (60 * 60 * 24 * 1000));

//*********************//
//**UPDATE ASSIGNMENT**//
//*********************//

/*

put http://localhost:5001/course-db-22/us-central1/app/todoList/homework+3

*/

// TODO: why on earth does this exist
// update
app.put('/todos/:assignment_id', async (req, res) => {
    try {
        const document = db.collection('todos').doc(req.params.assignment_id);
        const assignment = await document.get();
        const datetime = assignment.data().dateTime;
        const days = calcDue(datetime);
        await document.update({
            dueIn: days,
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
app.get('/todos/:assignment_id', async (req, res) => {
    try {
        const document = db.collection('todos').doc(req.params.assignment_id);
        let assignment = await document.get();
        let response = assignment.data();
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

// Returns a list of all assignments
app.get('/todos', async (req, res) => {
    try {
        let query = db.collection('todos');
        let response = [];
        await query.get().then((querySnapshot) => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                const selectedItem = {
                    id: doc.id,
                    dateTime: doc.data().dateTime,
                    name: doc.data().name,
                    dueIn: doc.data().dueIn,
                    courseId: doc.data().courseId,
                };
                response.push(selectedItem);
            }
        });
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

exports.app = functions.https.onRequest(app);
