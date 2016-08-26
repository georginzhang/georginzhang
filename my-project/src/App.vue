<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello1></hello1>
    <p>Welcome to your Vue.js app! {{data}}</p>
  </div>
</template>

<script>
import Hello1 from './components/Hello'

export default {
  components: {
      Hello1
  },
    data () {
      return {
        data:12123412344
      }
    }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
