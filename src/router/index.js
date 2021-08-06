import { createRouter, createWebHistory } from '@ionic/vue-router';
import Map from '../views/Map.vue';
const routes = [
  {
    path: '/map/first',
    name: 'FirstMap',
    component: Map,
  },
  {
    path: '/map/second',
    name: 'SecondMap',
    component: Map,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
