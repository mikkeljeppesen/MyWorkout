<template>
  <div class="addExerciseForm">
    <div class="input-wrapper">
      <label for="name">Name of the Exercise</label>
      <input type="text" id="name" v-model="exerciseName" />
    </div>

    <div class="input-wrapper">
      <label for="sets">Sets of the exercise</label>
      <input type="number" id="sets" v-model="exerciseSets" />
    </div>

    <div class="input-wrapper">
      <label for="exerciseReps">Reps per sets</label>
      <input type="text" id="exerciseReps" v-model="exerciseReps" />
    </div>

    <a v-on:click="addExercise" class="btn action">
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
      exerciseName: "",
      exerciseSets: 0,
      exerciseReps: 0,
      Workout: this.$route.params.id
    };
  },
  methods: {
    addExercise: function() {
      // console.log(this.$route.params.id); // console the right id

      firebase
        .firestore()
        .collection("exercises")
        .add({
          name: this.exerciseName,
          sets: this.exerciseSets,
          reps: this.exerciseReps,
          workout: this.$route.params.id
        })
        .then(data => {
          this.$router.push("/workouts/" + this.$route.params.id);
        })
        .catch(error => {
          console.log("error: " + error);
        });
    },
    cancel: function() {
      this.$router.push("/workouts/" + this.$route.params.id);
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
