<script setup>
import { ref, reactive, onMounted } from "vue";

const count = ref(0);
const state = reactive({ username: "John" });

const increment = () => {
  count.value++;
};

onMounted(() => {
  console.log("Component mounted");
});
</script>
<template>
  <div>
    <h2 class="text-center">SFC編譯語法糖</h2> 
    <p>Count: {{ count }}</p>
    <p>Username: {{ state.username }}</p>
    <button @click="increment">Increment Count</button>
  </div>
</template>


