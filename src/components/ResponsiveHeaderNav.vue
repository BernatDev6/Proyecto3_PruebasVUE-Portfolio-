<template>
  <header>
    <nav class="navbar justify-content-between bg-dark-blur">

      <div class="px-3 d-flex align-items-center">
        <span class="navbar-brand title">Bernat Font</span>
      </div>

      <div class="px-3 d-flex justify-content-end">
        <button class="toggle-button" type="button" @click="toggleMenu">
          <i class="fa-solid fa-bars"></i>
        </button>

        <div class="menu" v-show="isMenuOpen">
          <ul class="navbar-nav d-flex flex-column align-items-center">
            <li class="nav-item my-2">
              <router-link :to="{name: 'home'}" class="nav-link" @click="closeMenu">Home</router-link>
            </li>
            <li class="nav-item my-2">
              <router-link :to="{name: 'about'}" class="nav-link" @click="closeMenu">About</router-link>
            </li>
            <li class="nav-item my-2">
              <router-link :to="{name: 'contact'}" class="nav-link" @click="closeMenu">Contact</router-link>
            </li>
            <li class="nav-item my-2">
              <router-link :to="{name: 'bootstrapComp'}" class="nav-link" @click="closeMenu">Bootstrap Comp.</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

  
  <script setup>
  import { ref } from 'vue';
  
  // Estado para controlar el menú
  const isMenuOpen = ref(false);
  
  // Función para alternar el menú
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  // Función para cerrar el menú
  const closeMenu = () => {
    isMenuOpen.value = false;
  };
  </script>
  
  <style scoped lang="scss">

  /* Estilos del fondo con blur */
  .bg-dark-blur {
    background-color: #333; 
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px); 
  }
  
  /* Estilo del icono de hamburguesa */
  .toggle-button {
    align-self: flex-end;
    border: none;
    background: transparent;
    padding: 8px;
  }
  
  i {
    color: $primary-color;
    font-size: 30px
  }
  
  /* Estilos del menú colapsable */
  .menu {
    background-color: rgba(33, 37, 41, 0.9);
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: -1;
  }
  
  .menu li {
    list-style: none;
  }
  
  .menu a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
  </style>
  