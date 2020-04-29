<template>
  <div class="grid-wrapper">
    <Header/>
    <SignupForm class="main"/>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupForm from '@/components/SignupForm.vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Signup',
  components: {
    SignupForm,
    Header,
    Nav,
  }
}
</script>
