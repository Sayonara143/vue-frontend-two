<template>
  <div
    @dblclick="notice()"
    class="v-card-tasks"
    :class="{ left: isSide , right: !(isSide), notice: isNotice}">
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
      isNotice: false,
      aTask: [],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
  },
  methods: {
    notice () {
      this.isNotice = true
      console.log(1)
      let aNotice = JSON.parse(localStorage.getItem('aNotice'))
      if (aNotice === null) aNotice = []
      aNotice.push({'id': this.i_index})
      localStorage.setItem('aNotice', JSON.stringify(aNotice))
    },
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
          let id = result.data.id
          let aNotice = JSON.parse(localStorage.getItem('aNotice'))
          aNotice.forEach(notice => {
            if (notice.id === id) this.isNotice = true
          })

          this.inc()
        })
    } else {
      this.aTask = JSON.parse(localStorage.getItem('aTask'))
      for (let i = 0; i < this.aTask.length; i++) {
        if (this.i_index === this.aTask[i].id) {
          this.title = this.aTask[i].taskName
          this.completed = false
          let id = this.i_index
          let aNotice = JSON.parse(localStorage.getItem('aNotice'))
          aNotice.forEach(notice => {
            if (notice.id === id) this.isNotice = true
          })
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
