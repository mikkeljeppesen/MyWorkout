<template>
  <div class="grid-wrapper">
    <Header/>
    <addExerciseForm class="main"/>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import addExerciseForm from '@/components/addExerciseForm.vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'addExercise',
  components: {
    addExerciseForm,
    Header,
    Nav,
  }
}
</script>