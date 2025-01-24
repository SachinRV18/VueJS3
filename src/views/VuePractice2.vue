<template>
  <div>
    <!-- <button @click="showPopup = true">show popup</button> -->
    <!-- Binding te custom event using event binding custom component event -->
    <!-- <Popup v-show="showPopup" @close="closePopup"/> -->
  </div>
  <hr>
  <div>
    <!-- custom attribute -->
    <Input v-model="name" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
  </div>
</template>

<script>
// import Popup from '../components/popup.vue';
import Input from '../components/Input.vue';

  export default {
    name: 'VuePractice2',
    props: {
      modelValue: String
    },
    components: {
      // Popup,
      Input
    },
    data(){
      return{
        showPopup: false,
        name: '',
      }
    },
    methods: {
      closePopup(name){
        this.showPopup = false;
        console.log(name);
      }
    }

  }
</script>

<style scoped>

</style>
