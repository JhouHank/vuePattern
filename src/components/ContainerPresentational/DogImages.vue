<script setup>
import { defineProps } from "vue";
const { dogs } = defineProps(["dogs"]);
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <img v-for="(dog, index) in dogs" :src="dog" :key="index" alt="Dog"  />
    </div>
</template>
<style scoped>
img{
  width: 300px;
}
</style>

