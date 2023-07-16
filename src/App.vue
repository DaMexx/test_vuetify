<template>
  <v-app>
    <v-app-bar :elevation="12" rounded hide density="compact">
      <v-btn variant="tonal" @click="pushToHome">Home</v-btn>
      <v-divider></v-divider>
      <a href="https://vuetifyjs.com/en/"
      target="_blank">
        <v-btn variant="tonal">Vuetify docks</v-btn>
      </a>
    </v-app-bar>
    <div class="app">
      <router-view />
    </div>
  </v-app>
</template>

<script setup>
import { VAppBar } from 'vuetify/lib/components/index.mjs';
import { useRouter } from 'vue-router'

const router = useRouter()

function pushToHome() {
  router.push('/')
}
</script>
<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 0;
}
</style>








