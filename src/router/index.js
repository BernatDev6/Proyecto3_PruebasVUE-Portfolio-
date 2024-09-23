// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Projects from '../views/ProjectsView.vue';
import Contact from '../views/ContactView.vue';
import BootstrapComp from '@/views/BootstrapComp.vue';


const routes = [
  { 
    path: '/',
    component: Home,
    name: 'home'
  },
  { 
    path: '/about',
    component: About,
    name: 'about'
  },
  { 
    path: '/projects',
    component: Projects,
    name: 'projects'
  },
  { 
    path: '/contact',
    component: Contact,
    name: 'contact'
  },
  { 
    path: '/bootstrapComp',
    component: BootstrapComp,
    name: 'bootstrapComp'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
