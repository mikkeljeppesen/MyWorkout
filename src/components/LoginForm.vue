<template>
  <div>
    <h2>LOG IN</h2>
    <form class="loginForm">
      <input v-model="email" type="text" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
    </form>
    <a class="btn" v-on:click="login">Login</a>
    <p>DONT HAVE A USER?</p>
    <a class="btn secondary" v-on:click="signup">Signup</a>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
  name: "LoginForm",
  data: function() {
    return {
      email: "mje@gmail.com",
      password: "123456"
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          firebase
            .firestore()
            .collection("users")
            .doc(data.user.uid)
            .get()
            .then(doc => {
              // console.log(doc.data())
              this.$router.push("/workouts");
            });
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    },
    signup: function() {
      this.$router.push("/signup");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loginForm {
  margin: 1rem 0;
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

.secondary {
  width: 50%;
}

p {
  font-size: 1.5rem;
  color: $dark;
  margin: 4rem 0 1rem 0;
}

i {
  color: #ffffff;
  font-size: 4rem;
  margin: 10px;
}
</style>
