<template>
    <button class="p-0" @click="openWhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
    </button>
</template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Número de teléfono de la psicóloga en formato internacional
  const phoneNumber = ref('663888740'); // Reemplaza con el número real, ej: 5491123456789 para Argentina
  
  // Mensaje predeterminado
  const defaultMessage = ref('Hola, me gustaría agendar una cita.'); // Personaliza este mensaje
  
  const openWhatsApp = () => {
    // Codificar el mensaje para que sea compatible con la URL
    const encodedMessage = encodeURIComponent(defaultMessage.value);
    // Enlace de WhatsApp con el número de teléfono y el mensaje predeterminado
    const whatsappLink = `https://wa.me/${phoneNumber.value}?text=${encodedMessage}`;
    // Redirigir al enlace de WhatsApp
    window.open(whatsappLink, '_blank');
  };
  </script>
  
  <style scoped>
  button {
    position: fixed; /* Fija el botón en la pantalla */
    top: 25%; /* Margen desde la parte superior */
    left: 50%; /* Margen desde la parte derecha */
    border: none;
    background-color: transparent; /* Fondo transparente */
    cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
    z-index: 1000; /* Asegura que el botón esté por encima de otros elementos */
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #25D366;
    color: white;
    border: 1px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    font-size: 40px;
  }

  i:hover{
    background-color: #fff;
    color: #25D366;
    border: 1px solid #25D366;
  }
  
  button {
    border: none;
    background-color: #ffffff00;
  }
  </style>
  