<template>
  <div class="v-card-tasks" :class="{ left: isSide , right: !(isSide) }">
    <div class="v-card-tasks-text">
      <div class="v-card-tasks-text-title">{{title}}</div>
      <div class="v-card-tasks-text-date">{{date.day + ' ' + date.month + ' ' + date.year}}</div>
    </div>
    <button :class="{ active: completed , inactive: !(completed)}" >Done</button>
    <!-- <div class="wrapper">
      <div class="v-card-tasks-text">
        <div class="v-card-tasks-text-title">{{title}}</div>
        <div class="v-card-tasks-text-date">{{date.day + ' ' + date.month + ' ' + date.year}}</div>
      </div>
      <button :class="{ active: completed , inactive: !(completed)}" >Done</button>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'vCardTask',
  props: {
    i_index: {
      type: Number,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      title: '',
      completed: false,
      isSide: true,
      aTask: [],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
  },
  methods: {
    inc () {
      if (this.completed === true) {
        this.$emit('increment')
      }
    }
  },
  computed: {
    date () {
      let day = new Date(Date.now()).toString().slice(0, 10).split(' ')[2]
      let month = this.months[new Date().getMonth()]
      let year = new Date().getFullYear()
      return {'day': day, 'month': month, 'year': year}
    }
  },
  mounted () {
    if (this.i_index % 2 === 0) {
      this.isSide = false
    } else {
      this.isSide = true
    }
    if (this.i_index <= 20) {
      axios('https://jsonplaceholder.typicode.com/todos/' + String(this.i_index), {})
        .then((result) => {
          this.title = result.data.title
          this.completed = result.data.completed
          this.inc()
        })
    } else {
      this.aTask = JSON.parse(localStorage.getItem('aTask'))
      for (let i = 0; i < this.aTask.length; i++) {
        if (this.i_index === this.aTask[i].id) {
          this.title = this.aTask[i].taskName
          this.completed = false
          break
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import './style/style.scss'
</style>
