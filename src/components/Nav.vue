<template>
  <nav>
    <div class="menu">
      <template v-if="this.$route.path != '/workouts'">
        <div class="menu-wrapper list">
          <a v-on:click="workoutlist">
            <i class="fa fa-heart-o" aria-hidden="true"></i>Workouts
          </a>
        </div>
      </template>
      <template v-else>
        <div class="menu-wrapper list">
          <a class="active">
            <i class="fa fa-heart-o active" aria-hidden="true"></i>Workouts
          </a>
        </div>
      </template>
      <template v-if="this.$route.path != '/profile'">
        <div class="menu-wrapper profile">
          <a v-on:click="profile">
            <i class="fa fa-user-o" aria-hidden="true"></i>Profile
          </a>
        </div>
      </template>
      <template v-else>
        <div class="menu-wrapper profile">
          <a class="active">
            <i class="fa fa-user-o active" aria-hidden="true"></i>Profile
          </a>
        </div>
      </template>
      <!-- <div class="menu-wrapper logout"><a v-on:click="logout"><i class="fa fa-sign-out" aria-hidden="true"></i>logout</a></div>       -->
    </div>
  </nav>
</template>

<script>
import firebase from "firebase/app";
import auth from "firebase/auth";

export default {
  name: "Nav",
  methods: {
    workoutlist: function() {
      this.$router.push("/workouts");
    },
    profile: function() {
      this.$router.push("/profile");
    }
    // logout: function() {
    //   firebase.auth().signOut()
    //   .then(() => {
    //     this.$router.push("/login");
    //   })
    //   .catch(function(error) {
    //     console.log("this is your error: " + error)
    //   });
    // },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu {
  display: grid;
  grid-template-areas: "list user";
  width: 90%;
  margin: auto;
  .list {
    grid-area: list;
  }
  .profile {
    grid-area: user;
  }
}
a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $dark;
  font-size: 1.5rem;
  color: $dimmed;
  &.active {
    color: $dark;
  }
}
i {
  font-size: 2rem;
  color: $dimmed;
  &.active {
    color: $dark;
  }
}
</style>
