<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
body {
  margin: 0px;
  padding: 0px;
}
html{
  box-sizing: border-box;
}
*, *::before, *::after{
  box-sizing: inherit;
  text-decoration: none;
  outline: none;
}
::-webkit-scrollbar { width: 0; }
</style>
