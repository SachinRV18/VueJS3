<template>
  <div class="card">
    <!-- Menubar with item-click event binding -->
    <Menubar :model="items" class="simple-menubar" @item-click="onMenuItemClick" />
    <!-- <h2>AppComponent - {{ name }}</h2> -->


    <div class="content">
      <!-- <Greet name="Herok" user-age="20" />
      <Greet name="Ganesh" user-age="27" />
      <Greet name="Akshay" user-age="29" /> -->
      <!-- Dynamic content -->
      <!-- <Greet :name="Name" :user-age="userAge" />  -->

      <!-- <Articles id='my-article' title="The Jack Sparrow" :count="50" :isPublished="true" /> -->

      <!-- The router-view will display the corresponding component for the route -->
      <router-view />
    </div>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar'
import 'primeicons/primeicons.css'

// import Greet from './components/greet.vue'
import Articles from './components/Articles.vue'
import ProjectsView from './views/ProjectsView.vue';


export default {
  name: 'App',
  components: {
    Menubar,
    // Greet,
    Articles,
    ProjectsView,
  },
  data() {
    return {
      Name: 'Sachin',
      name: 'Ganesh',
      userAge: 25,
      items: [
        {
          label: 'Home',
          icon: 'pi pi-home',
          command: () => this.onMenuItemClick('/'), // Route to Home
        },
        {
          label: 'About',
          icon: 'pi pi-user',
          command: () => this.onMenuItemClick('/about'), // Route to About
        },
        {
          label: 'Features',
          icon: 'pi pi-star',
          command: () => this.onMenuItemClick('/features'), // Route to Features
        },
        {
          label: 'Projects',
          icon: 'pi pi-search',
          items: [
            {
              label: 'Vue Learnings',
              icon: 'pi pi-bolt',
              command: () => this.onMenuItemClick('/vuePractices'), // Route to Projects Components
            },
            {
              label: 'Developer-Task-Board',
              icon: 'pi pi-server',
              command: () => this.$router.push({ name: 'projects' }),
            },
            {
              label: 'Vue Learnings - 2',
              icon: 'pi pi-server',
              command: () => this.onMenuItemClick('/vuePractices2'),
            },
            {
              label: 'Sign In Form',
              icon: 'pi pi-server',
              command: () => this.onMenuItemClick('/signinForm'),
            },
            {
              label: 'Sign Up Form',
              icon: 'pi pi-server',
              command: () => this.onMenuItemClick('/signupForm'),
            },
            {
              label: 'Prime Vue Themes',
              icon: 'pi pi-server',
              command: () => this.onMenuItemClick('/primeVueThemes'),
            },
          ],
        },
      ],
    }
  },
  methods: {
    // Handle navigation to the selected route
    onMenuItemClick(route) {
      this.$router.push(route) // Navigate to the selected page route
    },
    // onTaskBoardClick() {
    //   // Navigate directly to the projects page when task-board is clicked
    //   this.$router.push({ name: 'projects' }) // This will navigate to the '/projects' route
    // },
  },
  provide() {
    return{
    username: this.name,
    }
  },
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 1vh;
  text-align: center;
}
</style>
