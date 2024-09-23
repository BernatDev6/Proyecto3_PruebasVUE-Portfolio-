<template>
    <div class="hero-section">
      <!-- Capa de superposición con opacidad -->
      <div class="overlay"></div>
  
      <!-- Contenido de la hero section -->
      <div class="hero-content">
        <h1>Descubre Nuestros Servicios</h1>
        <p>Ofrecemos soluciones innovadoras para tus necesidades.</p>
        <router-link class="cta-button" :to="{name: 'contact'}">Contáctanos</router-link>
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .hero-section {
    position: relative;
    background-image: url('../../../public/assets/images/p3.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    z-index: 1;
  }
  
  /* Capa de superposición */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  
  /* Contenido de la hero section */
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 80%;
  }
  
  /* Estilos para el botón de CTA */
  .cta-button {
    border: none;
    color: white;
    font-size: 24px;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    background-color: $primary-color;
    text-decoration: none;
  }
  </style>
  