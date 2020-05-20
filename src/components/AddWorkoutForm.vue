<template>
  <div class="addWorkoutForm">
    <div class="input-wrapper">
      <label for="name">Name of the workout</label>
      <input type="text" id="name" v-model="workoutName" />
    </div>

    <div class="input-wrapper">
      <label for="description">Description of the workout</label>
      <input type="text" id="description" v-model="workoutDesc" />
    </div>

    <div class="check-wrapper">
      <input type="checkbox" id="check" v-model="workoutWeekly" />
      <label for="check">Check this field to set weekly session</label>
    </div>

    <div class="input-wrapper">
      <label for="amount">Times a Week</label>
      <input type="number" id="amount" v-model="workoutWeeklyAmount" />
    </div>

    <a v-on:click="addWorkout" class="btn action">
      <i class="fa fa-check" aria-hidden="true"></i>
    </a>
    <a v-on:click="cancel" class="btn cancel">
      <i class="fa fa-ban" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
  name: "AddWorkoutForm",
  data: function() {
    return {
      workoutName: "",
      workoutDesc: "",
      workoutWeekly: false,
      workoutWeeklyAmount: 0
    };
  },
  methods: {
    addWorkout: function() {
      firebase
        .firestore()
        .collection("workout")
        .add({
          name: this.workoutName,
          description: this.workoutDesc,
          exercises: [],
          repetition: this.workoutWeeklyAmount,
          user: firebase.auth().currentUser.uid
        })
        .then(data => {
          this.$router.push("/workouts");
        })
        .catch(error => {
          console.log("fejl: " + error);
        });
    },
    cancel: function() {
      this.$router.push("/workouts");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  margin: 10px 0;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
  &:last-of-type {
    margin-top: 0;
  }
}

.check-wrapper {
  display: flex;
  margin: 10px 0 0 0;
  label {
    margin-bottom: 0;
  }
}

label {
  text-align: left;
  margin-bottom: 5px;
  color: $dark;
  font-size: 1.5rem;
}

input {
  text-align: left;
}
</style>
