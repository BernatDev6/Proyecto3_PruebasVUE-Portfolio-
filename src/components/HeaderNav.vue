<!-- src/components/Header.vue -->
<template>
    <header>
      <nav>
        <ul class="m-0 d-flex justify-content-center align-items-center">
          <li><router-link :to="{name: 'home'}">Home</router-link></li>
          <li><router-link :to="{name: 'about'}">About</router-link></li>
          <li><router-link :to="{name: 'contact'}">Contact</router-link></li>
          <li><router-link :to="{name: 'bootstrapComp'}">Bootstrap Comp.</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  // No se necesita JavaScript adicional por ahora
  </script>
  
  <style scoped lang="scss">
  header {
    background-color: #333;
  }
  
  nav ul {
    list-style: none;
    gap: 2rem;
  }
  
  nav a {
    color: white;
    text-decoration: none;
  }
  
  nav a.router-link-active {
    font-weight: bold;
  }

  nav {
  padding: 20px;
  }

  nav a.router-link-exact-active {
    color: $primary-color;
  }
  </style>
  