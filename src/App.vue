<template>
  <div id="app">
    <router-view class />
  </div>
</template>

<style lang="scss">
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
  color: $dark;
  height: 100vh;
}

i {
  width: auto;
}

button,
.btn {
  color: $primary;
  font-size: 2rem;
  padding: 10px 20px;
  border: 1px solid $dark;
  border-radius: $radius;
  background-color: $dark;
  transition: $transition;
  width: 65%;
  &:hover {
    background-color: darken($dark, 2%);
  }
  &:active {
    background-color: $dark;
  }
  &.cancel {
    width: 50%;
  }
  &.secondary {
    background-color: $primary;
    color: $dark;
    border: 1px solid $dimmed;
    i {
      color: $dark;
    }
    &:hover {
      background-color: darken($primary, 2%);
    }
    &:active {
      background-color: $primary;
    }
  }
}

input {
  background-color: transparent;
  border: 1px solid $dimmed;
  text-align: center;
  color: $dark;
  font-size: 1.8rem;
  padding: 10px 15px;
  &:focus {
    outline: none;
  }
}

h2 {
  color: $dark;
  font-size: 3rem;
  margin: 0;
}

.grid-wrapper {
  display: grid;
  height: 100vh;
  overflow: hidden;
  grid-template-areas:
    "header"
    "main"
    "nav";
}

.active {
  color: $dark;
}

header {
  grid-area: header;
  height: 10vh;
  width: 100%;
}

.main {
  grid-area: main;
  height: 80vh;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: $transition;
}

nav {
  grid-area: nav;
  height: 10vh;
  width: 80%;
  display: flex;
  margin: auto;
  background-color: $primary;
  border-top: 1px solid $dimmed;
}

.start-wrapper {
  width: 100%;
  height: 100%;
}
</style>
