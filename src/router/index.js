import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MainPage from '../views/MainPage.vue';
import ReviewView from '../views/ReviewView.vue';
import BusinessDetails from '../views/BusinessDetails.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/business-details/:id',
    name: 'business-details',
    component: BusinessDetails, 
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/review',
    name: 'Review',
    component: ReviewView,
  },
  // Add the route for BusinessDetails
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
