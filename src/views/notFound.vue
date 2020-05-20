<template>
    <div class="error">
        <h3>PAGE NOT FOUND</h3>
        <h2>404</h2>
        <a>TAKE ME BACK</a>
    </div>
</template>

<script>
import firebase from 'firebase/app';
export default {
  name: "notFound",
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$dark: #323132;
$radius: 5px;
$padding: 2rem;

h3 {
  color: $dark;
}

h2 {
  text-shadow: 3px 3px #383838;
}

a {
  color: $dark;
}
</style>
