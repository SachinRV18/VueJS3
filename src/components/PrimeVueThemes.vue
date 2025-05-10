<template >
  <div class="my-card">
    <br>
    <br><br>

    <InputText v-model="text" style="margin-right: 1rem" />
    <Button label="Save" />

    <br><br>
    <Button label="Toggle Dark Mode" @click="toggleDarkMode" />
    <br> <br>
    <Button label="Check" icon="pi pi-check" unstyled ></Button>
  </div>

</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

export default {
  components: {
    InputText,
    Button,
  },
  data() {
    return {
      text: '', // Placeholder for input text
    };
  },
  methods: {
    toggleDarkMode() {
      document.documentElement.classList.toggle('my-app-dark');
    },
  },
};
</script>

<style scoped>
/* Add your styles for dark mode if needed */
</style>
