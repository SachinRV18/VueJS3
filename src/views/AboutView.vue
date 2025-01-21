<template>
  <div class="welcome-container">
    <h1>This is an About Page</h1>
    <p>Learn more about us and what we do</p>
  </div>
</template>

<script>
export default {
  name: 'TheWelcome',
}
</script>

<style scoped>
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
  text-align: center;
}

.welcome-container h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.welcome-container p {
  font-size: 1.2rem;
  color: #777;
}

@media (min-width: 1024px) {
  .welcome-container h1 {
    font-size: 3rem;
  }

  .welcome-container p {
    font-size: 1.4rem;
  }
}
</style>
