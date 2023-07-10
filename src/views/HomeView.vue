<template>
  <div>
    <section>
      <h1>Buttons</h1>
      <span>Компонент v-btn заменяет стандартную html-кнопку темой оформления материала и множеством опций. Любой вспомогательный класс цвета можно использовать для изменения цвета фона или текста.</span>
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
        <v-btn variant="text" v-on:click="alert">text</v-btn>
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
      <h3>Density</h3>
      <span>Свойство size используется для управления размером кнопки и масштабирования с плотностью. Размер по умолчанию
        не определен, что означает средний размер.</span>
      <div class="app__section">
        <v-btn size="x-small">Extra small Button</v-btn>
        <v-btn size="small">Small Button</v-btn>
        <v-btn size="default">Regular Button</v-btn>
        <v-btn size="large">Large Button</v-btn>
        <v-btn size="x-large">X-Large Button</v-btn>
      </div>
    </section>
  </div>
</template>

<script setup>
const alert = () => {
  alert(123)
} 
</script>

<style scoped>
.app__section {
  display: flex;
  gap: 10px;
}
</style>