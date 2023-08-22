<script>
export default {
  data() {
    return {
      timeLeft: 1 * 60, // 5 минут в секундах
      timer: null
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.timeLeft--;

        if (this.timeLeft === 0) {
          this.stopTimer();
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  beforeUnmount() {
    this.stopTimer();
  },
};
</script>
<template>
  <h1>Dialogs</h1>
  <h2>Компонент v-dialog информирует пользователей о конкретной задаче и может содержать важную информацию, требовать
    принятия решений или включать несколько задач. Используйте диалоги экономно, потому что они мешают.</h2>

  timeLeft: {{ timeLeft }}
  <br>
  timer: {{ timer }}
</template>
