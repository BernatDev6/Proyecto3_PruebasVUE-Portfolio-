<template>
    <button class="p-0" @click="openWhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
    </button>
</template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Número de teléfono en formato internacional
  const phoneNumber = ref('654636920'); 
  
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
    position: fixed;
    bottom: 2%;
    right: 2%; 
    cursor: pointer;
    z-index: 100;
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
  