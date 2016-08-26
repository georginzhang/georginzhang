<template>
  <div class="hello">
    <h1 @click="reverse(msg)">{{ msg }}</h1>
  </div>
</template>

<!--suppress JSAnnotator -->
<script>
export default {
  data () {
    return {
      msg: 'Hello World!',
    }
  },
  methods:{
    reverse: function(msg){
      this.msg = msg.split('').reverse().join('');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
