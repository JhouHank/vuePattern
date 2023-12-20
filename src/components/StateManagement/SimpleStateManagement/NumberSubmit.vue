<script setup>
import { ref } from "vue";
import { store } from "../../../stores/store.js";

const numberInput = ref(0);
</script>

<template>
    <div>
        <input v-model="numberInput" type="number" />
        <button @click="store.addNumber(numberInput)">Add new number</button>
    </div>
</template>

