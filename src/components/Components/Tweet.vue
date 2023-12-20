<script setup>
import TweetUser from "./TweetUser.vue"
import TweetDetails from "./TweetDetails.vue"
</script>
<template>
    <div class="Tweet">
        <image class="Tweet-image" :src="image.imageUrl" :alt="image.description" />
        <TweetUser :author="author" />
        <TweetDetails :text="text" :date="date" />
    </div>
</template>
  
  