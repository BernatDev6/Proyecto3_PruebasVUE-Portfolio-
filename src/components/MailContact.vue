<template>
    <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Surname</label>
        <input type="text" name="user_surname" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Enviar" />
    </form>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import emailjs from '@emailjs/browser';

const router = useRouter();
const form = ref(null);

const sendEmail = () => {
emailjs
    .sendForm('service_q4fcp1e', 'template_w1vgou6', form.value, {
    publicKey: 'r6AC_t7FNYG0VEZjk',
    })
    .then(
    () => {
        console.log('SUCCESS!');
        router.push('/')
    },
    (error) => {
        console.log('FAILED...', error.text);
        alert('Error al enviar el mensaje');
    },
    );
};
</script>

<style scoped lang="scss">
$form-background: #f9f9f9;
$form-border-radius: 8px;
$input-padding: 10px;
$input-border-color: #ccc;
$input-focus-border-color: #007bff;

form {
  background-color: $form-background;
  border-radius: $form-border-radius;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;

  label {
    display: block;
    margin-bottom: 5px;
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
    padding: $input-padding;
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
  