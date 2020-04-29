<template>
  <div class="grid-wrapper">
    <Header/>
    <LoginForm class="main"/>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
    Header,
    Nav,
  }
}
</script>
