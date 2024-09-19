<template>
  <section>
    <div class="d-flex flex-wrap justify-content-evenly align-items-center">
      <div class="text-content p-5" data-aos="fade-right">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <button @click="handleClick">Haz clic aquí</button>
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

<style scoped lang="scss">
  section{
    background-color: $secondary-color;
  }

  button{
    border: 1px solid $primary-color;
    padding: 8px 16px;
    border-radius: 8px;
    color: $primary-color;
    background-color: #ffffff00;
  }

  button:hover{
    color: $secondary-color;
    border: 1px solid $secondary-color;
    background: $primary-color

  }

</style>
  