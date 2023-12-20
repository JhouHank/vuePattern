<script setup>
import { defineProps } from 'vue';

const props = defineProps(['count', 'increment', 'decrement']);
</script>

<template>
  <div>
    <p>Counter: {{ count }}</p>
    <button @click="increment" class="btn btn-primary">Increment</button>
    <button @click="decrement" class="btn btn-success">Decrement</button>
  </div>
</template>

  