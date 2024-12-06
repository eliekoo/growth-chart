// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import PercentileGraphPage from '@/components/views/PercentileGraphPage.vue'; 
import LandingPage from "@/components/views/LandingPage.vue";
import ArticlePage from "@/components/views/blog_articles/ArticlesOne.vue";
import ContactForm from "@/components/views/ContactForm.vue";
import InfantHomePage from '@/components/views/InfantsHomePage.vue';
// import FetalHomePage from "@/components/FetalHomePage.vue";
// import KidsHomePage from "@/components/KidsHomePage.vue";

// Define the routes for the application
const routes = [
  {
    path: '/', // Root path - this is the homepage
    name: 'LandingPage',
    component: LandingPage, // Component for the homepage
  },
  // {
  //   path: '/fetal',
  //   name: 'FetalHomePage',
  //   component: FetalHomePage,
  // },
  {
    path: '/infant',
    name: 'InfantHomePage',
    component: InfantHomePage,
  },
  // {
  //   path: '/kid',
  //   name: 'KidsHomePage',
  //   component: KidsHomePage,
  // },
  {
    path: '/blog',
    name: 'Blog',
    component: ArticlePage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm,
  },
  {
    path: '/info/percentile-graph', // Path for the "Learn More" page
    name: 'percentile-graph',
    component: PercentileGraphPage, // Component for the detailed percentile explanation page
  },
];

// Create the Vue Router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // This uses history mode for clean URLs (no hash)
  routes, // Register the defined routes
});

export default router; // Export the router instance
