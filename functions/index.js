const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.createUser = functions.https.onCall((data, context) => {
    return admin.firestore().collection("users").doc(context.auth.uid).set({
        username: data.username,
    })
})

// EXERCISE
exports.createExercise = functions.firestore.document('/exercises/{id}').onCreate((snapshot, context) => {
    let data = snapshot.data();
    return admin.firestore().collection("workout").doc(data.workout).update({
        exercises: admin.firestore.FieldValue.arrayUnion(snapshot.id)
    })
});