<template>
  <div class="container">
    <h2>{{this.$route.params.workout.name}}</h2>
    <ul class="list">
      <li v-for="(exercise, index) in this.$route.params.workout.exercises" :key="index">
        <ExerciseData :data="exercise" />
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import ExerciseData from "@/components/ExerciseData.vue";

export default {
  name: "Workout",
  components: {
    ExerciseData
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$transition: all 0.2s ease;

.exercise {
  margin: 10px auto;
  overflow: hidden;
  transition: $transition;
  h3 {
    margin: 0 0 10px 0;
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 300;
  }
  .exerciseForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  .action {
    margin-top: 20px;
  }
}

.fa-bar-chart {
  width: 50%;
}

.container {
  width: 100%;
}

ul {
  padding: 0;
}

li {
  list-style: none;
  margin: auto;
}
</style>
