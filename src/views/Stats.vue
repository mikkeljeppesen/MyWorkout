<template>
  <div class="grid-wrapper">
    <Header />
    <div class="main">
      <ExerciseProgress :styles="myStyles" />
    </div>
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import ExerciseProgress from "@/components/ExerciseProgress.vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "stats",
  components: {
    ExerciseProgress,
    Header,
    Nav
  },
  computed: {
    myStyles() {
      return {
        width: `90%`, // remeber that the ratio aspect default is true - that why i font define the height
        position: "relative"
      };
    }
  }
};
</script>

<style>
</style>
