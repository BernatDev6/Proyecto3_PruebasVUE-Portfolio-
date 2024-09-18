<template>
  <div>
    <HeaderNav v-if="isDesktop" />
    <ResponsiveHeaderNav v-else />
  </div>
  <main>
    <router-view></router-view>
    <WhatsappButton />
  </main>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
