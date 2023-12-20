<script setup>
// import Tweet from "../components/Components/Tweet.vue"
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<template>
  <div class="container">
    <!-- 組件 -->
    <section>
      <h2 class="text-center">Components（組件）</h2>
      <!-- <Tweet/> -->
    </section>
    <!-- 響應式狀態 -->
    <section>
      <h2>Reactive state（響應式狀態）</h2>
      <div>
        <h2>Counter: {{ count }}</h2>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
      </div>
    </section>
  </div>
</template>
