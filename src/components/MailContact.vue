<template>
    <form ref="formRef" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name" v-model="form.user_name" maxlength="20" />
        <label>Surname</label>
        <input type="text" name="user_surname" v-model="form.user_surname" maxlength="20" />
        <label>Email</label>
        <input type="email" name="user_email" v-model="form.user_email" />
        <label>Message</label>
        <textarea name="message" v-model="form.message"></textarea>
        <input type="submit" value="Enviar" />
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import emailjs from '@emailjs/browser';

const router = useRouter();
const errorMessage = ref('');
const form = ref({
    user_name: '',
    user_surname: '',
    user_email: '',
    message: '',
});

// Definimos una referencia para el formulario
const formRef = ref(null);

const sendEmail = () => {
    // Validaciones
    if (!form.value.user_name || !form.value.user_surname || !form.value.user_email || !form.value.message) {
        errorMessage.value = 'Campos obligatorios vacíos.';
        return;
    }

    // Pasamos el formulario HTML directamente usando formRef
    emailjs
    .sendForm('service_q4fcp1e', 'template_w1vgou6', formRef.value, {
        publicKey: 'r6AC_t7FNYG0VEZjk'
    })
    .then(
    () => {
        console.log('SUCCESS!');
        router.push('/');
    },
    (error) => {
        console.log('FAILED...', error.text);
        alert('Error al enviar el mensaje');
    }
    );
};
</script>

<style scoped lang="scss">
$form-background: #f9f9f9;
$form-border-radius: 8px;
$input-padding: 8px;
$input-border-color: #ccc;
$input-focus-border-color: #007bff;

.error {
    color: red;
    margin-top: 20px;
  }

form {
  background-color: $form-background;
  border-radius: $form-border-radius;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;

  label {
    width: 100%;
    text-align: left;
    padding: 0 0 4px 4px;
    font-weight: bold;
    color: #333;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: $input-padding;
    margin-bottom: 15px;
    border: 1px solid $input-border-color;
    border-radius: $form-border-radius;
    font-size: 16px;

    &:focus {
      border-color: $input-focus-border-color;
      outline: none;
    }
  }

  textarea {
    min-height: 100px;
    resize: none;
  }

  input[type="submit"] {
    background-color: $input-focus-border-color;
    color: #fff;
    border: none;
    padding: $input-padding 20px;
    border-radius: $form-border-radius;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: darken($input-focus-border-color, 10%);
    }
  }
}

</style>
  