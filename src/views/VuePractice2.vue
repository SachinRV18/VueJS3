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
  <div>
    <hr>
    <Card></Card>
    <Card><h1>Hello sachin</h1> </Card>
    <Card> Card content</Card>
    <Card> <img src="https://picsum.photos/100" alt=""></Card>
  </div>
  <Card>
    <template #header>
      <h3>header</h3>
    </template>

    <template v-slot:default>
      <img src="https://picsum.photos/100" alt="">
    </template>

    <template #footer>
      <button>View Details </button>
    </template>
  </Card>

  <div>
    <hr>
    <NameList>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }}
        {{ slotProps.lastName }}
      </template>
    </NameList>

    <NameList>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }}
        {{ slotProps.lastName }}
      </template>
    </NameList>

    <NameList>
      <template v-slot:default="slotProps">
        {{ slotProps.lastName }}
        {{ slotProps.firstName }}
      </template>
    </NameList>

    <NameList>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }}
      </template>
    </NameList>

    <NameList>
      <template v-slot:default="slotProps">
        {{ slotProps.lastName }}
      </template>
    </NameList>
  </div>

  <div>
    <hr>
    <h4>Parent component text</h4>
    <!-- <ChildStyles /> -->
    <ChildStyles>
    <h4> ChildStyles component text</h4>
    </ChildStyles>
  </div>

  <div>
    <hr>
    <button @click="activeTab = 'TabA'" >TabA</button>
    <button @click="activeTab = 'TabB'">TabB</button>
    <button @click="activeTab = 'TabC'">TabC</button>

    <!-- to keep the dynamic component alive in Vue we use keep-alive tag -->
    <keep-alive>
      <component :is="activeTab" />
    </keep-alive>

    <!-- instead of doing this the above code works -->
    <!-- <TabA  v-if="activeTab === 'TabA'"/>
    <TabB  v-if="activeTab === 'TabB'" />
    <TabC  v-if="activeTab === 'TabC'"/> -->
  </div>

  <div>
    <teleport to='#portal-root'>
    <Portal />
    </teleport>
    <!-- Example code in sandbox : https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkxHX2poRjZYakxlbDRzeEU2eElNRFZ0ZUlzUXxBQ3Jtc0trc1hCT2c4X00yWm5uUXpkTlJqOFF1WWRicVJJTHJhcjJZMnY4QTBKeTFvZnQxRTlnbmRsMWRpY0x2REVlV2lHT3JuaUstcUVXeVBNSVpNT3FtYmZYYzFoZUNQZzhUNzcxSVRFN3VmT0p5Und4SHZSWQ&q=https%3A%2F%2Fcodesandbox.io%2Fs%2Fvishwas-vue-teleport-4z93t&v=KOmQ8a2EOFA -->
  </div>
</template>

<script>
// import Popup from '../components/popup.vue';
import Input from '../components/Input.vue';
import Card from '../components/Card.vue';
import NameList from '../components/NameList.vue';
import ChildStyles from '../components/ChildStyles.vue';
import TabA from '../components/TabA.vue';
import TabB from '../components/TabB.vue';
import TabC from '../components/TabC.vue';
import Portal from '../components/Portal.vue';

  export default {
    name: 'VuePractice2',
    props: {
      modelValue: String
    },
    components: {
      // Popup,
      Input,
      Card,
      NameList,
      ChildStyles,
      TabA,
      TabB,
      TabC,
      Portal
    },
    data(){
      return{
        showPopup: false,
        name: '',
        activeTab: 'TabA'
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
h4{
  color: orange;
}

</style>
