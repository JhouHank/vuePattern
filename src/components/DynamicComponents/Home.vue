<script setup>
  import { ref } from "vue";

  const counter = ref(0);

  // eslint-disable-next-line no-unused-vars
  const incrementCounter = () => {
    counter.value++;
  };
</script>

<template>
  <div class="tab">
    Home component
    <p>Counter: {{ counter }}</p>
    <button @click="incrementCounter"  class="btn btn-secondary">Increment</button>
  </div>
</template>

