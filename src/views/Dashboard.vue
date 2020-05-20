<template>
  <div class="grid-wrapper">
    <Header></Header>
    <div class="main">
      <div class="start-wrapper">
        <template v-if="this.$route.name == 'Workouts'">
          <a v-on:click="addWork">
            <i class="fa fa-plus btn secondary" aria-hidden="true"></i>
          </a>
          <WorkoutsList />
        </template>
        <template v-if="this.$route.params.id">
          <a v-on:click="addEx">
            <i class="fa fa-plus btn secondary" aria-hidden="true"></i>
          </a>
          <Workout />
        </template>
      </div>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkoutsList from "@/components/WorkoutsList.vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Workout from "@/components/Workout.vue";

export default {
  name: "Workouts",
  components: {
    WorkoutsList,
    Header,
    Workout,
    Nav
  },
  methods: {
    addWork: function() {
      this.$router.push("/addWorkout");
    },
    addEx: function() {
      this.$router.push(this.$route.params.id + "/addExercise");
    }
  }
};
</script>

<style scoped lang="scss">
.btn {
  margin: 20px 0 10px 0;
}
</style>
