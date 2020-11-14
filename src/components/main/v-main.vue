<template>
  <div class="container">
    <vAuth/>
    <vBackground/>
  </div>
</template>

<script>
import vAuth from './v-auth/v-auth.vue'
import vBackground from './v-background/v-background.vue'
export default {
  name: 'vMain',
  metaInfo: {
    title: 'Welcome'
  },
  components: {
    vAuth,
    vBackground
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

 // $lol: red;
.container{
  padding: 0;
  margin: 0;
  @include wh100;
  display: flex;
  flex-direction: row;
}
</style>
