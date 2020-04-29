<template>
  <div class="grid-wrapper">
    <Header/>
    <AddWorkoutForm class="main"/>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddWorkoutForm from '@/components/AddWorkoutForm.vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'addWokout',
  components: {
    AddWorkoutForm,
    Header,
    Nav,
  }
}
</script>