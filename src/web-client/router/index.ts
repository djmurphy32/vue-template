import VueRouter from 'vue-router'
import Hello from '@/components/Hello.vue'

function createRouter(): VueRouter {
  const router = new VueRouter({
    mode: 'history',

    routes: [
      {
        path: '/',
        name: 'Home',
        component: Hello,
      },
    ],
  })

  return router
}

export default createRouter
