<template>
  <header>
    <HeaderNav v-if="isDesktop" />
    <ResponsiveHeaderNav v-else />
  </header>
  <main>
    <router-view></router-view>
    <WhatsappButton />
  </main>
  <footer>
    
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeaderNav from './components/HeaderNav.vue';
import ResponsiveHeaderNav from './components/ResponsiveHeaderNav.vue';
import WhatsappButton from './components/WhatsappButton.vue';

const isDesktop = ref(false);

// Function to update the screen size
const updateScreenSize = () => {
  // Check for the Bootstrap 'md' breakpoint (768px)
  isDesktop.value = window.innerWidth >= 768; // 'md' breakpoint
};

// Set up the event listener on mount
onMounted(() => {
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
});

// Clean up the event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #474747;
}

header{
  position: relative;
  z-index: 2;
}

main{
  position: relative;
  z-index: 1;
}

</style>
