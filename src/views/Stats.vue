<template>
  <div class="grid-wrapper">
    <Header/>
    <ExerciseStats class="main"/>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import ExerciseStats from '@/components/ExerciseStats.vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'stats',
  components: {
    ExerciseStats,
    Header,
    Nav,
  }
}
</script>
