import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const app = createApp(App)

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
    colorScheme: {
      FormField: {
        paddingX: '1rem',
        paddingY: '1rem',
      },
      myButton: {
        paddingX: '3rem',
        paddingY: '1rem',
      },
      colorScheme: {
        light: {
          FormField: {
            hoverBorderColour: '{primary.color}',
          },
        },
        dark: {
          FormField: {
            hoverBorderColour: '{primary.color}',
          },
          surface: {
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '{zinc.500}',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}',
          },
        },
      },
    },
  },
  components: {
    button: {
      paddingX: '{myButton.paddingX}',
      paddingY: '{myButton.paddingY}',
    },
  },
})
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      // false or 'none' for light mode
      darkModeSelector: '.my-app-dark',
    },
  },
  // unstyled: true,
})

app.mount('#app')
