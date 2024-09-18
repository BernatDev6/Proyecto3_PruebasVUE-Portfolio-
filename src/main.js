import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './theme.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css'; // Importamos AOS y los estilos CSS necesarios para que funcione.
import AOS from 'aos';
const app = createApp(App)

app.use(router)

app.mount('#app')

AOS.init()
