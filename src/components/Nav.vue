<template>
  <nav v-on:click="toggle">
    <div class="display">
      <img src=@/assets/logo2.png alt="">
    </div>
    <div class="menu">
      <div class="menu-wrapper list"><a v-on:click="workoutlist"><i class="fa fa-heart" aria-hidden="true"></i>workoutlist</a></div>
      <div class="menu-wrapper profile"><a v-on:click="profile"><i class="fa fa-user" aria-hidden="true"></i>your profile</a></div>
      <div class="menu-wrapper settings"><a v-on:click="settings"><i class="fa fa-cog" aria-hidden="true"></i>settings</a></div>
      <div class="menu-wrapper logout"><a v-on:click="logout"><i class="fa fa-sign-out" aria-hidden="true"></i>logout</a></div>      
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase/app';
export default {
  name: "Nav",
  methods: {
    toggle: function() {
      var nav = document.querySelector("nav");
      nav.classList.toggle("nav-expand");
      var main = document.querySelector(".main");
      main.classList.toggle("main-contract");
    },
    workoutlist: function() {
      this.$router.push("workouts");
    },
    settings: function() {
      this.$router.push("settings");
    },
    profile: function() {
      this.$router.push("profile");
    },
    logout: function() {
      this.$router.push("profile");
    },
  },
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

.display {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 8vh;
  }
}

.menu {
  display: grid;
  grid-template-areas: 
  "list user"
  "cog logout";
  .menu-wrapper {
    padding: 10px 0;
  }
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $color;
    font-size: 1.5rem;
  }
  i {
    color: $color;
    font-size: 2rem;
  }
  .list {
    grid-area: list;
  }
  .profile {
    grid-area: user;
  }
  .settings {
    grid-area: cog;
  }
  .logout {
    grid-area: logout;
  }
} 
</style>
