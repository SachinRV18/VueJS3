<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-bind="$attrs"> Number of Articles: {{ count }}</p>
    <p>isPublished :  {{ isPublished? 'Yes' : 'No' }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Articles',
    props: {
      title : {
        type: String,
        required: true,
        default: 'Default Title'
      },
      count: Number,
      isPublished: Boolean
    },
    inheritAttrs: false
  }
</script>

<style scoped>

</style>
