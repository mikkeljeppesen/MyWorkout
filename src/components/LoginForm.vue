<template>
  <div>
      <form class="loginForm">
          <input v-model="email" type="text" placeholder="Email">
          <input v-model="password" type="password" placeholder="Password">
      </form>
      <a class="btn" v-on:click="login">Login</a>
      <p>OR</p>
      
      <div class="social">
        <a><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
        <a><i class="fa fa-google" aria-hidden="true"></i></a>
      </div>

  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default {
    name: 'LoginForm',
    data: function() {
    return {
      email: "mje@gmail.com",
      password: "123456",
    };
  },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then( (data)=> {
                firebase.firestore().collection("users").doc(data.user.uid).get()
                .then((doc)=> {
                    // console.log(doc.data())
                    this.$router.push("/workouts"); 
                })
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$primary: #232429;
$btn-primary: #1B1C20;
$color: #707070;
$shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
$radius: 5px;
$padding: 2rem;

.loginForm {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        font-size: 2rem;
        &:last-of-type {
            margin-top: 1rem;
        }
    }
}

p {
    font-size: 1.5rem;
    color: $color;
    margin: 20px 0 0 0;
}

i {
    color: #ffffff;
    font-size: 4rem;
    margin: 10px;
}
</style>
