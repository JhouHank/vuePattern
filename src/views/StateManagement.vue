<script setup>
import { ref } from "vue";
import ChildComponentProps from "../components/StateManagement/Props/ChildComponent.vue";
import ChildComponentEvents from "../components/StateManagement/ComponentEvents/ChildComponent.vue";
import NumberDisplay from "../components/StateManagement/SimpleStateManagement/NumberDisplay.vue";
import NumberSubmit from "../components/StateManagement/SimpleStateManagement/NumberSubmit.vue";
import { useNumbersStore } from "../stores/useNumbersStore";


const numbers = ref([1, 2, 3]);
const numbersEvents = ref([4, 5, 6]);
const store = useNumbersStore();
</script>

<template>
  <div class="container d-flex flex-column gap-1">
    <h2 class="text-center">StateManagement 狀態管理</h2>
    <div>
      <h3>Props 父組件傳遞到子組件</h3>
      <div>
        <ChildComponentProps :numbers="numbers" />
      </div>
    </div>
    <hr/>
    <div>
      <h3>Component Events 自定義事件 子組件傳遞到父組件</h3>
      <div>
        <ChildComponentEvents :numbers="numbersEvents" @number-added="(n) => numbersEvents.push(n)" />
      </div>
    </div>
    <hr/>
    <div>
      <h3>Simple State Management 兄弟組件傳遞數據</h3>
      <NumberDisplay/>
      <NumberSubmit/>
    </div>
    <hr/>
    <div>
      <h3>Pinia 全域狀態管理</h3>
      <div>
        <h2>{{ store.numbers }}</h2>
      </div>
    </div>
  </div>
</template>

