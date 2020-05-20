import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import moment from 'moment';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue'),
    
  },
  {
    path: '/workouts', // denne er view/workouts som indeholder alle mine awesome worksouts
    name: 'Workouts',
    component: () => import(/* webpackChunkName: "workouts" */ '../views/Dashboard.vue'),
    beforeEnter: function(to, from, next) {
      firebase.firestore().collection("workout").where("user", "==", firebase.auth().currentUser.uid).get()
      .then((data) => {
        var workouts = []; //laver en liste over workouts
        data.docs.forEach((doc) => {
          let workout = doc.data(); //henter data fra documentet
          workout.id = doc.id; //henter id fra documentet
          workouts.push(workout); //tilføjer documentet til vores liste
        })
        to.params.workouts = workouts; //sender denne liste videre til page
        next();
      })
    }
  },
  {
    path: '/workouts/:id', // denne indeholder en workout hvor jeg kan se de forskellige øvelser. når jeg trykker på en workout i listen skal jeg sende et id videre 
    name: 'Workout', 
    component: () => import(/* webpackChunkName: "Workout" */ '../views/Dashboard.vue'),
    beforeEnter: function(to, from, next) {
      //når vi kalder denne funktion, så får vi kun catch/error, hvis noget går galt (databsen er nede, eller noget)
      //det betyder, at hvis det dokument vi leder efter ikke eksisterer, så får vi fagtisk ikke en error,
     firebase.firestore().collection("workout").doc(to.params.id).get() 
     .then((doc) => {
       if(doc){ //vi ser om det er et dokument
        let workout = doc.data();

        let promises = [];

        workout.exercises.forEach((exercise) => {
          promises.push(firebase.firestore().collection("exercises").doc(exercise).get());
        })

        Promise.all(promises)
        .then((docs) => {
          workout.exercises = [];
          docs.forEach((doc) => {
            let exercise = doc.data();
            exercise.id = doc.id;
            workout.exercises.push(exercise);
          })
          to.params.workout = workout;
          next();
        })
        .catch(() => {
          next("/404");
        })
       }else{
         next("/404");
       }
     })
     .catch((erorr) => {
       
       next("/404");
     })
    }
  },
  {
    path: '/workouts/:id/stats/:idE', // denne indeholder en workout hvor jeg kan se de forskellige øvelser. når jeg trykker på en workout i listen skal jeg sende et id videre 
    name: 'Stats', 
    component: () => import(/* webpackChunkName: "Workout" */ '../views/Stats.vue'),
    beforeEnter: function(to, from, next) {
      let minWorkout = to.params.id;
      let minExercise = to.params.idE;

     firebase.firestore().collection("exercises").doc(minExercise).get()
     .then((doc) => {
        let exercise = doc.data(); // return the exercise object
        let exerciseData = exercise.data
        let reps = exercise.sets;
        let sets = exercise.reps;

        let weight = [];
        let date = [];
        let total = [];

        exerciseData.forEach((exercise) => {
          let exerciseDate = moment(exercise.date.toDate()).format('DD-MM-YYYY');
          date.push(exerciseDate);

          let exerciseWeight = exercise.weight;
          weight.push(exerciseWeight);

          let totalMath = exerciseWeight * reps * sets;
          total.push(totalMath);
        })
        console.log(total)

        to.params.total = total
        to.params.weight = weight;
        to.params.date = date;
        next();
     })
     .catch((error) => {
       console.log(error);
       next("/404");
     })
    }
  },
  {
    path: '/addWorkout', // denne er view/workouts som indeholder alle mine awesome worksouts
    name: 'AddWorkout',
    component: () => import(/* webpackChunkName: "addWorkout" */ '../views/AddWorkout.vue'), // jeg skal lave mig et view hvor man kan se alle exercises?
  },
  {
    path: '/404', 
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/notFound.vue'),
  },
  {
    path: '/workouts/:id/addExercise',
    name: 'addExercise',
    component: () => import(/* webpackChunkName: "addExercise" */ '../views/AddExercise.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
