<template>
  <div @touchstart="first($event)" @touchend="second($event)" class="v-create">
    <div class="v-create-task">
      <div class="v-create-task-header">New Task</div>
      <div class="v-create-task-block">
        <div class="v-create-task-block-title">Task name</div>
        <textarea :class="{ ok: isGood }" v-model="taskName" v-on:input="this.change" placeholder="Enter task name..."></textarea>
      </div>
      <button v-on:click="this.createTask">Create</button>
    </div>
    <div v-if="!(isFlag)" v-on:click="this.delete" class="v-create-button delete"></div>
    <div v-if="isFlag" v-on:click="$router.go(-1)" class="v-create-button back"></div>
    <vError v-if="isError" @click.native="changeError()"/>
  </div>
</template>

<script>
import vError from '../error/v-error.vue'
const mailRegex = /[A-Za-z0-9_]/
export default {
  name: 'vCreateTask',
  metaInfo: {
    title: 'New Task'
  },
  components: {
    vError
  },
  data () {
    return {
      isFlag: true,
      isGood: false,
      taskName: '',
      aTask: [],
      count: 0,
      firstX: 0,
      firstY: 0,
      isError: 0
    }
  },
  methods: {
    changeError () {
      this.isError = false
    },
    delete () {
      this.taskName = ''
      this.isFlag = true
    },
    first: function (event) {
      this.firstX = event.changedTouches[0].screenX
      this.firstY = event.changedTouches[0].screenY
    },
    second: function (event) {
      if (this.firstX < event.changedTouches[0].screenX) {
        if ((this.firstY > event.changedTouches[0].screenY - 20) && (this.firstY < event.changedTouches[0].screenY + 20)) {
          this.$router.push({name: 'vTask'})
        }
      }
    },
    change () {
      if (this.taskName !== '') {
        this.isFlag = false
      } else {
        this.isFlag = true
      }
    },
    createTask () {
      if (mailRegex.test(this.taskName)) {
        this.aTask = JSON.parse(localStorage.getItem('aTask'))
        if (this.aTask === null) {
          this.aTask = []
        }
        this.count = Number(Number(localStorage.getItem('count')) + 1)
        localStorage.setItem('count', this.count)
        this.aTask.push({'id': this.count, 'taskName': this.taskName})
        localStorage.setItem('aTask', JSON.stringify(this.aTask))
        this.taskName = ''
        this.isFlag = true
        this.isGood = true
        setTimeout(() => {
          this.isGood = false
        }, 1000)
      } else {
        this.isError = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import './style/style.scss'

</style>
