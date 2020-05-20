<template>
  <div class="signup">
    <h2>SIGN UP</h2>
    <form class="signupForm">
      <input v-model="username" id="username" type="text" placeholder="Username" />
      <input v-model="email" id="email" type="text" placeholder="Email" />
      <input v-model="password" id="pwd" type="password" placeholder="Password" />
      <input v-model="passwordRepeat" id="repeatPwd" type="password" placeholder="Repeat Password" />
    </form>
    <p v-if="error != null" class="error">{{ error }}</p>
    <a class="btn" v-on:click="signup">Submit</a>
    <p>ALREADY HAVE AN USER?</p>
    <a class="btn secondary" v-on:click="login">Login</a>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";

export default {
  name: "SignupForm",
  data: function() {
    return {
      username: "",
      email: "",
      password: "",
      passwordRepeat: "",
      error: null
    };
  },
  methods: {
    signup: function() {
      // check fields for right information
      if (this.password !== this.passwordRepeat || this.password === "") {
        this.error = "Password is not identical";
        return;
      }
      // everything is validated ;)
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // add information to database
          let createUser = firebase.functions().httpsCallable("createUser");
          createUser({
            username: this.username
          });
          // it when fucking awesome
          this.$router.push("/workouts");
        })
        .catch(error => {
          // Handle Errors here.
          // error handling (something with p tag)
          this.error = error.message;
          console.log(error);
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    },
    login: function() {
      this.$router.push("/login");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.signupForm {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin-top: 10px;
  }
}
i {
  color: #ffffff;
  font-size: 4rem;
  margin: 10px;
}

.secondary {
  width: 50%;
}

.error {
  color: #cf0f0f;
  font-size: 1.5rem;
  margin-top: 0;
}
</style>
