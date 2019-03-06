<template>
  <div id="app">
    <cy-switch v-model="switchValue" @change="handleChange"></cy-switch>开关：
  </div>
</template>

<script>
import cySwitch from './packages/switch/cy-switch'
export default {
  name: 'app',
  data () {
    return {
      switchValue: false
    }
  },
  components: {
    cySwitch
  },
  methods: {
    handleChange () {
      console.log('switchValue', this.switchValue)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
