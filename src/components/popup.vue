<template>
  <div>
    <h1>This is a pop up</h1>
    <input type="text" v-model="name" />
    <!-- emit an event using using $emit instance property -->
    <!-- <button @click="$emit('close', 'sachin')">close popup</button> -->
    <button @click="$emit('close', name)">close popup</button>
  </div>
  <hr>
  <div>
    <input type="text" v-model="sname" />
  </div>
</template>

<script>

  export default {
    name: 'Popup',
    // emits: ['close'],  // specify the emitted event in child component
    emits:{
      close: (name) => {
        if(!name){
          return false;
        }else{
          return true;
        }
      },
    },
    data(){
      return{
        name: ''
      }
    },

  }
</script>

<style scoped>

</style>
