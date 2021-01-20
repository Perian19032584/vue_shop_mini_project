<template>
  <div id="app">
    <component-wrapper></component-wrapper>
  </div>
</template>

<script>
import ComponentWrapper from './components/component-wrapper';

export default {
  name: 'App',
  components: {
    ComponentWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
