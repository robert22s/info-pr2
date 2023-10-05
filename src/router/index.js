import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrudView from '../views/CrudView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
     path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/crud',
      name: 'crud',
      component: CrudView
    }
  ]
})

export default router
