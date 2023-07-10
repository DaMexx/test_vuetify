<template>
  <div>
    <section>
      <h1>Buttons</h1>
      <span>Компонент v-btn заменяет стандартную html-кнопку темой оформления материала и множеством опций. Любой
        вспомогательный класс цвета можно использовать для изменения цвета фона или текста.</span>
      <br>
      <br>
      <v-btn>v-btn</v-btn>
      <br>
      <br>
      <h2>Props</h2>
      <h3>Variant</h3>
      <span>Пропс Variant меняет стили границ кнопки</span>
      <br>
      <div class="app__section">
        <v-btn variant="text" @click="alert">text</v-btn>
        <v-btn variant="flat">flat</v-btn>
        <v-btn variant="elevated">elevated</v-btn>
        <v-btn variant="tonal">tonal</v-btn>
        <v-btn variant="outlined">outlined</v-btn>
        <v-btn variant="plain">plain</v-btn>
      </div>
      <h3>Density</h3>
      <span>Свойство density используется для управления вертикальным пространством, которое занимает кнопка.</span>
      <div class="app__section">
        <v-btn density="compact">Compact Button</v-btn>
        <v-btn density="comfortable">Comfortable Button</v-btn>
        <v-btn density="default">Default Button</v-btn>
      </div>
      <h3>Size</h3>
      <span>Свойство size используется для управления размером кнопки и масштабирования с плотностью. Размер по умолчанию
        не определен, что означает средний размер.</span>
      <div class="app__section">
        <v-btn size="x-small">Extra small Button</v-btn>
        <v-btn size="small">Small Button</v-btn>
        <v-btn size="default">Regular Button</v-btn>
        <v-btn size="large">Large Button</v-btn>
        <v-btn size="x-large" color="purple">X-Large Button</v-btn>
      </div>
      <h3>Block</h3>
      <span>Свойство Block позволяет занять всю доступную ширину своего контейнера. Это удобно для создания кнопок,
        занимающих всю ширину карточки или диалогового окна.</span>
      <div class="app__section">
        <v-btn>Not a Block</v-btn>
        <v-btn block>Block</v-btn>
      </div>
      <h3>Rounded</h3>
      <span>Rounded контролирует степень скругления углов кнопки</span>

      <div class="app__section" style="flex-direction: column;">
        <v-btn block rounded="0">Rounded 0</v-btn>
        <v-btn block rounded="xs">Rounded xs</v-btn>
        <v-btn block rounded="sm">Rounded sm</v-btn>
        <v-btn block>Default</v-btn>
        <v-btn block rounded="lg">Rounded lg</v-btn>
        <v-btn block rounded="xl">Rounded xl</v-btn>
      </div>

      <h3>Elevation</h3>
      <span>Свойство Elevation обеспечивает до 24 уровней глубины тени. По умолчанию кнопки располагаются на 2 dp.</span>
      <div class="app__section" style="flex-direction: column;">
        <v-btn size="x-large">Default Elevation (2)</v-btn>
        <v-btn elevation="4" size="x-large">Elevation 4</v-btn>
        <v-btn elevation="8" size="x-large">Elevation 8</v-btn>
        <v-btn elevation="12" size="x-large">Elevation 12</v-btn>
        <v-btn elevation="16" size="x-large">Elevation 16</v-btn>
        <v-btn elevation="20" size="x-large">Elevation 20</v-btn>
        <v-btn elevation="24" size="x-large">Elevation 24</v-btn>
      </div>

      <h3>Ripple</h3>
      <span>Свойство Ripple определяет, будет ли использоваться директива v-ripple (анимация при нажатии внутри кнопки)
      </span>
      <div class="app__section" style="flex-direction: column;">
        <v-btn size="large">
          With Ripple
        </v-btn>
        <v-btn :ripple="false" size="large">
          Without Ripple
        </v-btn>
      </div>
      <h3>Icon</h3>
      <span>Иконки могут использоваться для основного содержимого кнопки. Они обычно используются в v-toolbar и v-app-bar
        компоненты.
      </span>
      <div class="app__section" style="flex-direction: column;">
        <v-btn icon="mdi-plus" density="compact" :ripple="false"></v-btn>
        <v-btn icon="$vuetify" density="comfortable"></v-btn>
        <v-btn icon="mdi-open-in-new" density="default"></v-btn>
        <v-btn icon="mdi-account" size="x-small"></v-btn>
        <v-btn icon="mdi-plus" size="small"></v-btn>
        <v-btn icon="$vuetify"></v-btn>
        <v-btn icon="mdi-open-in-new" size="large"></v-btn>
        <v-btn icon="mdi-calendar" size="x-large" :disabled="true"></v-btn>
      </div>

      <h3>Loaders</h3>
      <span>Используя пропс loading, вы можете уведомить пользователя о том, что происходит обработка. По умолчанию
        используется компонент v-progress-circular, но его можно настроить с помощью слота загрузчика.
      </span>
      <v-btn :loading="loading" class="flex-grow-1" height="48" variant="tonal" @click="load">
        button with loader
      </v-btn>
      <h3>Slots</h3>
      <span>Компонент v-btn предоставляет слоты, которые позволяют вам настраивать контент, созданный с помощью его
        пропсов, или добавлять дополнительный контент.</span>
      <br>
      <picture>
        <source srcset="https://cdn.vuetifyjs.com/docs/images/components/v-btn/v-btn-slots.png">
        <img src="https://cdn.vuetifyjs.com/docs/images/components/v-btn/v-btn-slots.png" alt="">
      </picture>
      <div>1. Default - стандартный слот (для вставки текста и пр.)</div>
      <div>2. Prepend - слот, находящийся перед дефолтным слотом</div>
      <div>3. Append - слот, стоящий после дефолтного</div>
      <div>4. Loader - слот, отображающийся вместо дефолтного, если пропс :loading="true"</div>
    </section>
    <h3>Icon color</h3>
    <span>Когда вы используете реквизиты prepend-icon и append-icon в сочетании с соответствующим слотом,
      prepend или append, вы можете разместить v-icon который автоматически вводит назначенный значок. Так же при помощи
      слотов, можно управлять стилизацией иконок. В том числе это можно использовать для кастомизации лоадера</span>
    <br>
    <v-btn prepend-icon="mdi-check-circle" append-icon="mdi-check-circle">
      <template v-slot:prepend>
        <v-icon color="purple"></v-icon>
      </template>
      Button with custom icon color
      <template v-slot:append>
        <v-icon color="warning"></v-icon>
      </template>
    </v-btn>
    <br>
    <v-btn :loading="loading" @click="load">
      Custom loader
      <template v-slot:loader>
        <v-progress-linear indeterminate></v-progress-linear>
      </template>
    </v-btn>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const alert = () => {
  console.log(123);
}
const loading = ref(false)
const load = () => {
  loading.value = true
  setTimeout(() => (loading.value = false), 3000)
}
</script>

<style scoped>
.app__section {
  padding: 20px 0;
  display: flex;
  gap: 10px;
}
</style>