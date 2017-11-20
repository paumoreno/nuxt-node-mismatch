<template>
  <div class="App">
    <div class="App__contents">
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

@import '../assets/css/reset.css';
@import '../assets/css/elements.scss';

html, body {
  background-color: white;
    font-family: sans-serif;
}

.App {
    display: flex;
}

.App__contents {
    flex: 1 1 auto;
}
</style>
