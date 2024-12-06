// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue'; // Import the HomePage component
import PercentileGraphPage from '@/components/PercentileGraphPage.vue'; // Import the PercentileGraphPage component

// Define the routes for the application
const routes = [
  {
    path: '/', // Root path - this is the homepage
    name: 'HomePage',
    component: HomePage, // Component for the homepage
  },
  {
    path: '/percentile-graph', // Path for the "Learn More" page
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
