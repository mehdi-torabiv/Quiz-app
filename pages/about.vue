<template>
  <section class="parallax-container"></section>
  <section class="buffer">
    <div class="bg-white text-center p-4" style="min-height: 20vh">
      <FTypographi tag="h1" size="3xl"> Simple parralex with scroll for quiz app! </FTypographi>
    </div>
  </section>
  <section class="parallax-container parallax-container2"></section>
</template>

<script setup></script>

<style lang="less">
body,
html {
  height: 100%;
  margin: 0;
  overflow-x: hidden;
}
.parallax-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /*  this is where the magic happens:  */
  background-attachment: fixed;

  background-image: url('../static/malta-1.webp');
  background-position: center;
  background-size: cover;
  color: var(--color);
  row-gap: 4rem;

  text-align: center;
}
.buffer {
  width: 100%;
  min-height: 20vh;
  background-color: var(--color);
}

.parallax-container2 {
  flex-direction: row;
  flex-wrap: wrap;

  padding: 6rem 0;
  background-image: url('../static/malta-2.webp');
  gap: 1.6em;
}
</style>
