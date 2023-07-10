<template>
  <v-app>
    <v-app-bar :elevation="12" rounded hide density="compact">
      <v-btn variant="tonal" @click="pushToHome">Home</v-btn>
      <router-link class="app__link" to="buttons">Buttons</router-link>
      <router-link class="app__link" to="cards">Cards</router-link>
      <router-link class="app__link" to="chips">Chips</router-link>
      <router-link class="app__link" to="dialogs">Dialogs</router-link>
      <router-link class="app__link" to="expansion-panel">Expansion-panel</router-link>
      <router-link class="app__link" to="list">List</router-link>
      <router-link class="app__link" to="menus">Menus</router-link>
      <router-link class="app__link" to="overlays">Overlays</router-link>
      <router-link class="app__link" to="sheets">Sheets</router-link>
      <router-link class="app__link" to="toolbars">Toolbars</router-link>
      <router-link class="app__link" to="tooltips">Tooltips</router-link>
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








