<script setup>
import { defineProps } from 'vue';
const props = defineProps(['width']);
</script>
<template>
    <div>
        <p>這裡是子組件</p>
        <p>寬度：{{ width }}</p>
    </div>
</template>
  
  