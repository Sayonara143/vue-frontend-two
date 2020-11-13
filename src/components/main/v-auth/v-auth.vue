<template>
  <div class="v-auth">
    <div class="v-auth-wrapper">
      <div class="v-auth-wrapper-header">Welcome to a<br>todo app</div>
      <form>
        <div class="block one">
          <label>Email</label>
          <input v-model="postBody.email" type="email" placeholder="Enter email...">
        </div>
        <div class="block two">
          <label>Password</label>
          <input v-model="postBody.password" type="password" placeholder="Enter password...">
        </div>
      </form>
      <button v-on:click='this.validation'>Login</button>
    </div>
    <vError v-if="isError" @click.native="change()"/>
  </div>
</template>

<script>
import vError from '../../error/v-error.vue'
const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export default {
  name: 'vAuth',
  data () {
    return {
      postBody: {
        email: '',
        password: ''
      },
      isError: false
    }
  },
  components: {
    vError
  },
  methods: {
    validation () {
      if (mailRegex.test(this.postBody.email) && this.postBody.password !== '') {
        this.$router.push({name: 'vTask'})
      } else {
        this.isError = true
      }
    },
    change () {
      this.isError = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import './styles/style.scss'
</style>
