import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ListarCamisetasPage from '../views/ListarCamisetasPage.vue'
import CrearCamisetaPage from '../views/CrearCamisetaPage.vue'
import DetalleCamisetaPage from '../views/DetalleCamisetaPage.vue'
import NosotrosPage from '../views/NosotrosPage.vue'
import BolsaPage from '../views/BolsaPage.vue'
import RegistroCamisetasPage from '../views/RegistroCamisetasPage.vue'
import RegistrarDatosRelevantesPage from '../views/RegistrarDatosRelevantesPage.vue'
import EstadisticasPage from '../views/EstadisticasPage.vue'
import EditarCamisetaPage from '../views/EditarCamisetaPage.vue'
import DonacionesPage from '../views/DonacionesPage.vue'
import EscuelasPage from '../views/EscuelasPage.vue'

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
    path: '/detalle/:idCamiseta',
    name: 'detalle_camiseta',
    component: DetalleCamisetaPage
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: NosotrosPage
  },
  {
    path: '/bolsa',
    name: 'bolsa',
    component: BolsaPage
  },
  {
    path: '/registro-camisetas',
    name: 'registro_camisetas',
    component: RegistroCamisetasPage
  },
  {
    path: '/datos-relevantes/registrar-datos',
    name: 'registro_datos',
    component: RegistrarDatosRelevantesPage
  },
  {
    path: '/datos-relevantes/estadisticas',
    name: 'estadisticas',
    component: EstadisticasPage
  },
  {
    path:'/editar-camiseta/:idCamiseta',
    name: 'editar-camiseta',
    component : EditarCamisetaPage 
  },
  {
    path:'/donaciones',
    name: 'donaciones',
    component : DonacionesPage 
  },
  {
    path:'/escuelas',
    name: 'escuelas',
    component : EscuelasPage 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
