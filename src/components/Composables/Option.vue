<script setup>
import Count from "./Count.vue";
import Width from "./Width.vue";
import { useCounter } from "../../composables/useCount";
import { useWidth } from "../../composables/useWidth";

const { count, increment, decrement } = useCounter(0);
const { width } = useWidth();
</script>

<template>
    <div class="App">
        <Count :count="count" :increment="increment" :decrement="decrement" />
        <hr/>
        <Width :width="width" />
    </div>
</template>
