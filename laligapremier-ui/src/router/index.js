import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ListarCamisetasPage from '../views/ListarCamisetasPage.vue'
import CrearCamisetaPage from '../views/CrearCamisetaPage.vue'
import CrearCamisetaPage2 from '../views/CrearCamisetaPage2.vue'
import DetalleCamisetaPage from '../views/DetalleCamisetaPage.vue'
import NosotrosPage from '../views/NosotrosPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/camisetas',
    name: 'camisetas',
    component: ListarCamisetasPage
  },
  {
    path: '/crear-camiseta',
    name: 'crear_camiseta',
    component: CrearCamisetaPage
  },
  {
    path: '/detalle/id',
    name: 'detalle_camiseta',
    component: DetalleCamisetaPage
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: NosotrosPage
  },
  {
    path: '/crear-camiseta2',
    name: 'crear-camiseta2',
    component: CrearCamisetaPage2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
