<script setup>
import { ref } from "vue";
const { numbers } = defineProps(["numbers"]);
const number = ref(0);
</script>

<template>
    <div>
        <h2>{{ numbers }}</h2>
        <input v-model="number" type="number" />
        <button @click="$emit('number-added', Number(number))">
            Add new number
        </button>
    </div>
</template>

