<template>
  <div class="grid-wrapper">
    <Header/>
    <Start class="main"/>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import Start from '@/components/Start.vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'home',
  components: {
    Start,
    Header,
    Nav,
  }
}
</script>

<style lang="scss" scoped> 

</style>