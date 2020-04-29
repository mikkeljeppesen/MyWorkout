<template>
  <ul class="list">
    <li class="btn" v-for="(workout, index) in $route.params.workouts" :key="index">
      <a v-on:click="goTo(workout.id)">{{workout.name}}</a>
    </li>
  </ul>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: "WorkoutsList",
  methods: {
    goTo: function(id){
      this.$router.push("workouts/" + id);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 10px;
}
</style>
