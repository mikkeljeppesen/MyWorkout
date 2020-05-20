<template>
  <header>
    <h1>{{headerText}}</h1>
  </header>
</template>

<script>
import firebase from "firebase/app";
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["headerText"])
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: #ffffff;
}

p {
  font-size: 2rem;
  color: $dark;
}

img {
  height: 8vh;
}
</style>
