<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer"
    temporary
    app>
      <v-list>
         <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
         >
          <v-icon>{{ item.icon }}</v-icon> {{ item.title }}
         </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Informatički projekt 2</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
    <MyComp/>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import MyComp from './components/MyComp.vue'
  const drawer = ref(null)
</script>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      components: {
        MyComp,
      },
      items: [
        {
          title: 'Početna',
          value: 'pocetna',
          icon: 'mdi-home',
          to: '/'
        },
        {
          title: 'CRUD',
          value: 'bar',
          icon: 'mdi-api',
          to: '/crud'
        },
      ],
    }),
  }
</script>