<template>
    <section class="home-section">
      <div class="d-flex align-items-center">
        <div class="text-content" data-aos="fade-right">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
          <button @click="handleClick">Haz clic aquí</button>
        </div>
        <div class="image-content" data-aos="fade-left">
          <img src="../../../public/assets/images/p4.png" alt="Imagen de ejemplo" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  
  const title = ref('Bienvenido a Mi Portfolio, soy Bernat Font');
  const description = ref('Aquí puedes encontrar información sobre mi.');
  
  const handleClick = () => {
    router.push('/about');
  };
  </script>
  
  <style scoped>
  .home-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem;
    background-color: #fcf1d5;
  }
  
  .container {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .text-content {
    flex: 1;
    padding-right: 1rem;
  }
  
  .image-content {
    flex: 1;
  }
  
  .image-content img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  