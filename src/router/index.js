import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/PaginaPrincipal.vue'
import PaginaNoticia from '../pages/PaginaNoticia.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/noticia/:id',
    name: 'Noticia',
    component: PaginaNoticia,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
