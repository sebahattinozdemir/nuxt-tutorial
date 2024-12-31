// middleware/auth.global.ts
// gouardsss
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Global middleware ', to.name);
    if (isAuthenticated() && to.name === 'about') {
      return navigateTo('/');
    }
  });
  
  function isAuthenticated() {
    return true; // Replace with your authentication logic
  }
  