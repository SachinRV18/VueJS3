<template>
    <h3 v-for="name in Names" :key="name.firstName">
      <!-- {{ name.firstName }} {{ name.lastName }} -->
        <!-- we need to access the first name and last name using slots -->
        <slot :firstName="name.firstName"  :lastName="name.lastName"></slot>
    </h3>
</template>

<script>
  export default {
    components: 'NameList',
    data() {
      return {
        Names: [
        { firstName: "Sachin", lastName: "RV" },
        { firstName: "Ganesh", lastName: "Raikar" },
        { firstName: "Arjun", lastName: "Vasu" },
      ],
      }
    },
  }
</script>

<style scoped>

</style>
