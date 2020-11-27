<template>
  <div @touchstart="first($event)" @touchend="second($event)" class="v-tasks">
    <div class="v-tasks-wrapper">
      <div class="v-tasks-wrapper-header">Tasks</div>
      <div class="v-tasks-wrapper-block">
        <vCardTask  @increment="parentIncrement()"  v-for="(index) in this.taskCount" :key="index" :i_index="index"/>
        <router-link :to="{name: 'vCreateTask'}">
          <div class="v-tasks-wrapper-block-newTask">
            <div class="v-tasks-wrapper-block-newTask-center">
              <div class="v-tasks-wrapper-block-newTask-center-icon"></div>
              <div class="v-tasks-wrapper-block-newTask-center-text">Create new task</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="v-tasks-completed">Completed tasks: {{count}}</div>
    <div class="v-tasks-completed-two">{{count}}</div>
  </div>
</template>

<script>
import vCardTask from './v-card-task/v-card-task'
export default {
  name: 'vTask',
  metaInfo: {
    title: 'Tasks'
  },
  components: {
    vCardTask
  },
  data () {
    return {
      count: 0,
      taskCount: 0,
      firstX: 0,
      firstY: 0,
      completed: false
    }
  },
  methods: {
    first: function (event) {
      this.firstX = event.changedTouches[0].screenX
      this.firstY = event.changedTouches[0].screenY
    },
    second: function (event) {
      if (this.firstX > event.changedTouches[0].screenX) {
        if ((this.firstY > event.changedTouches[0].screenY - 50) && (this.firstY < event.changedTouches[0].screenY + 50) && (this.firstX - event.changedTouches[0].screenX >= 100)) {
          this.$router.push({name: 'vCreateTask'})
        }
      }
    },
    parentIncrement () {
      this.count++
    }
  },
  mounted () {
    this.taskCount = Number(localStorage.getItem('count'))
    if (this.taskCount < 20) {
      this.taskCount = 20
      localStorage.setItem('count', 20)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import './style/style.scss'
</style>
