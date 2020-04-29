<template>
  <div id="app">
    <router-view class=""/>
  </div>
</template>

<style lang="scss">

$primary: #232429;
$btn-primary: #1B1C20;
$action: #2669B6;
$cancel: #B62626;
$confirm: #388C26;
$color: #707070;
$shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
$radius: 5px;
$padding: 2rem;
$transition: all .2s ease;


html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 10px;
}

body {
  background-color: $primary;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

button,
.btn {
  color: $color;
  font-size: 2rem;
  padding: 10px 20px;
  border: none;
  border-radius: $radius;
  background-color: $btn-primary;
  box-shadow: $shadow;
  transition: $transition;
  width: 65%;
  &:hover {
    background-color: darken($btn-primary, 2%);
  }
  &:active {
    background-color: $btn-primary;
  }
  &.cancel {
    width: 50%;
  }
  &.action {
    background-color: $action;
    color: #ffffff;
    i {
      color: #ffffff;
    }
    &:hover {
      background-color: darken($action, 2%);
    }
    &:active {
      background-color: $btn-primary;
    }
  }
}

input {
  background-color: transparent;
  border: none;
  text-align: center;
  color: #ffffff;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.25),
  inset -5px -5px 5px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  &:focus {
    outline: none;
  }
}

h2 {
  color: $color;
  font-size: 3rem;
}

.grid-wrapper {
  display: grid;
  height: 100vh;
  overflow: hidden;
  grid-template-areas:
  "header"
  "main"
  "nav"
  ;
}

header {  
  grid-area: header;
  height: 10vh;
  width: 100%;
  box-shadow: $shadow;
}

.main {
  grid-area: main;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: $transition;
}

nav {
  grid-area: nav;
  height: 10vh;
  width: 100%;
  background-color: $primary;
  box-shadow: -5px -5px 5px rgba($color: #000000, $alpha: 0.25);
}

.main-contract {
  height: 60vh;
}

.nav-expand {
  height: 30vh;
}

</style>
