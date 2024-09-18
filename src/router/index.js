// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Projects from '../views/ProjectsView.vue';

const routes = [
  { 
    path: '/',
    component: Home,
    name: 'Home'
  },
  { 
    path: '/about',
    component: About,
    name: 'About'
  },
  { 
    path: '/projects',
    component: Projects,
    name: 'Projects'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
