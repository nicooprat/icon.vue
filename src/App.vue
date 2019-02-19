<template>
  <div id="app">
    <Icon class="icon1" icon="chat"/>
    <Icon class="icon2" icon="file"/>
    <Icon class="icon3" icon="help"/>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

#app {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

svg {
  margin: 5vw;
}

.icon1 {
  color: blue;
}

.icon2 {
  color: red;
}

.icon3 {
  color: green;
}
</style>
