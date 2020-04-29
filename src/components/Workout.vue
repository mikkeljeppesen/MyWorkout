<template>
  <div class="container">
    <h2>{{this.$route.params.workout.name}}</h2> 
    <ul class="list">
      <li v-for="(exercise, index) in this.$route.params.workout.exercises" :key="index"> 
        <div :class="{ active: panels }" v-on:click="expandPanel" class="btn exercise">
          <h3>{{exercise.name}}</h3>
          <form class="exerciseForm">
            <input type="number" placeholder="Weight in kg">
            <a class="btn action"><i class="fa fa-plus" aria-hidden="true"></i></a>
          </form>
            <a v-on:click="stats(exercise.id)"><i class=" btn fa fa-bar-chart" aria-hidden="true"></i></a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: "Workout", 
  data: function() {
    return {
      panels: false,
    };
  },
  methods: {
    stats: function(id) {
      this.$router.push(this.$route.params.id + "/stats/" + id);
    },
    expandPanel: function() {
      this.panels = !this.panels;
    
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$transition: all .2s ease;

.exercise {
  margin: 10px auto;
  overflow: hidden;
  height: 23px;
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

.active {
  height: auto;
}
</style>
