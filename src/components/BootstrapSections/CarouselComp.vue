<template>
    <h2 class="text-start">Carousel</h2>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button
          v-for="(image, index) in images"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : null"
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>
  
      <!-- Imágenes del carousel -->
      <div class="carousel-inner">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img :src="image.src" class="d-block w-100" :alt="image.alt">
          <!-- Capa de texto -->
          <div class="carousel-caption d-flex flex-column justify-content-center">
            <h3>{{ image.title }}</h3>
            <p>{{ image.text }}</p>
          </div>
        </div>
      </div>
  
      <!-- Botones de control -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const images = ref([
    { src: '/assets/images/p1.jpeg', alt: 'Image 1', title: 'Title 1', text: 'This is the first image.' },
    { src: '/assets/images/p2.jpg', alt: 'Image 2', title: 'Title 2', text: 'This is the second image.' },
    { src: '/assets/images/p3.jpg', alt: 'Image 3', title: 'Title 3', text: 'This is the third image.' }
  ]);
  </script>
  
  <style scoped>
  .carousel-item {
    position: relative;
  }
  
  .carousel-item img {
    height: 500px;
    object-fit: cover;
  }
  
  .carousel-caption {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Fondo oscuro semi-transparente */
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .carousel-indicators .active {
    background-color: #fff; /* Color de la seccion activa en la barra inferior */
  }
  </style>
  