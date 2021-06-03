import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import ProductsPage from '../views/ProductsPage.vue';
import LePasta from '../views/LePasta.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'About',
    component: About
  },
  {
    path: '/produtos',
    name: 'Products',
    component: ProductsPage
  },
  {
    path: '/lepasta',
    name: 'LePasta',
    component: LePasta
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
