<template>
  <div class="start">
    <h2>Your Personal Tracker</h2>
    <form action class="buttons">
      <a class="btn" v-on:click="login">Login</a>
      <a class="btn secondary" v-on:click="signup">Sign Up</a>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  name: "Start",
  methods: {
    login: function() {
      this.$router.push("/login");
    },
    signup: function() {
      this.$router.push("/signup");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  .btn {
    margin-bottom: 1rem;
    width: 65%;
    &:last-of-type {
      width: 50%;
      align-items: center;
    }
  }
}

p {
  font-size: 1.5rem;
  color: #585858;
}
</style>
