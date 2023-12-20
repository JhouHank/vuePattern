<script setup>
  import { TweetAvatar } from "./TweetAvatar.vue";
</script>
<template>
    <div class="User">
        <TweetAvatar />
        <div class="User-name">{{ author.name }}</div>
    </div>
</template>
