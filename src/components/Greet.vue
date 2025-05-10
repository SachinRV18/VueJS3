<template>
  <div>
    <h1>Hello, {{ name }} and your age is {{ userAge }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Greet',
    props: ['name', 'userAge']
  };
</script>

<style scoped>

</style>
