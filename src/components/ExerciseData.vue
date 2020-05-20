<template>
  <div v-on:click="toggle=!toggle" class="btn exercise">
    <h3>{{data.name}}</h3>
    <div v-if="toggle">
      <template>
        <form class="exerciseForm">
          <input ref="weight" type="number" placeholder="Weight in kg" />
          <a v-on:click="save(data.id)">
            <i class="fa fa-plus btn action" aria-hidden="true"></i>
          </a>
        </form>
        <a v-on:click="stats(data.id)">
          <i class="btn fa fa-bar-chart" aria-hidden="true"></i>
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
  name: "ExerciseData",
  data: function() {
    return {
      toggle: false
    };
  },
  methods: {
    stats: function(id) {
      console.log(id);
      this.$router.push(this.$route.params.id + "/stats/" + id);
    },
    save: function(id) {
      let value = this.$refs.weight.value;
      if (value == "") {
        console.log("error");
      } else {
        console.log(id);
        firebase
          .firestore()
          .collection("exercises")
          .doc(id)
          .update({
            data: firebase.firestore.FieldValue.arrayUnion({
              weight: value,
              date: new Date()
            })
          });
      }
    }
  },
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.exercise {
  margin: 10px auto;
  overflow: hidden;
  transition: $transition;
  height: active;
  h3 {
    margin: 0;
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 300;
  }
  .exerciseForm {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    .btn {
      width: 70px;
    }
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
