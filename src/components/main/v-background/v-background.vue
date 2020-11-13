<template>
  <div class="v-background">
  </div>
</template>

<script>
export default {
  name: 'vBackground'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.v-background{
  width: 50vw;
  height: 100vh;
  background-image: url('../../../assets/image/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
@media screen and (max-width: 750px){
  .v-background{
    display: none;
  }
}
</style>
