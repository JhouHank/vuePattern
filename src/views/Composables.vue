<script setup>
import Count from "../components/Composables/Count.vue";
import Width from "../components/Composables/Width.vue";
import { useCounter } from "../composables/useCount";
import { useWidth } from "../composables/useWidth";

const { count, increment, decrement } = useCounter(0);
const { width } = useWidth();
</script>

<template>
  <div class="container">
    <section>
      <h2>Option API（選項式API）</h2>
      <div class="App">
        <Count :count="count" :increment="increment" :decrement="decrement" />
        <hr/>
        <Width :width="width" />
      </div>
    </section>
    <section>
      <h2>Composition API（組合式API）</h2>
    </section>
  </div>

</template>
