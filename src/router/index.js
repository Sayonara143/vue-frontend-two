import Vue from 'vue'
import Router from 'vue-router'

const vMain = () => import('../components/main/v-main.vue')
const vCreateTask = () => import('../components/crTask/v-create-task.vue')
const vTask = () => import('../components/tasks/v-task.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vMain',
      component: vMain
    },
    {
      path: '/createTask',
      name: 'vCreateTask',
      component: vCreateTask
    },
    {
      path: '/tasks',
      name: 'vTask',
      component: vTask
    }
  ]
})
