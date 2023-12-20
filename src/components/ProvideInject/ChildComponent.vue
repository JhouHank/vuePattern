<script setup>
import { inject } from "vue";

const data = inject("data");
</script>

<template>
    <div>
        <p>{{ data }}</p>
    </div>
</template>

