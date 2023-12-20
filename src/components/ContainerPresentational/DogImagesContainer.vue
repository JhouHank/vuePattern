<script setup>
import { ref, onMounted } from "vue";
import DogImages from "./DogImages.vue";

const dogs = ref([]);

onMounted(async () => {
    const response = await fetch(
        "https://dog.ceo/api/breed/labrador/images/random/2"
    );
    const { message } = await response.json();
    dogs.value = message;
});
</script>

<template>
    <DogImages :dogs="dogs" />
</template>

