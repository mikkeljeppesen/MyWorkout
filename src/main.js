import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import firebase from 'firebase/app'
import auth from 'firebase/auth'
import router from './router'
import store from './store'


Vue.config.productionTip = false

// Your web app's Firebase configuration
if(firebase.apps.length == 0) {
  var firebaseConfig = {
  apiKey: "AIzaSyB5wwonijf9pVRa5ZiEK47tEVjQaiY8PHo",
  authDomain: "workout-295f4.firebaseapp.com",
  databaseURL: "https://workout-295f4.firebaseio.com",
  projectId: "workout-295f4",
  storageBucket: "workout-295f4.appspot.com",
  messagingSenderId: "932370759297",
  appId: "1:932370759297:web:d8c7c9e2e7bf9278b99780"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
} 

function init () {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  });
}

let app 
init()
  .then(() => {
    if(!app) {
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
  })


