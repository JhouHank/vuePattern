<script setup>
import { provide } from "vue";
import ChildComponent from "../components/ProvideInject/ChildComponent.vue";

provide("data", "Data from parent!");
</script>

<template>
  <div id="app" >
    <h2 class="text-center">Provide / Inject <br/> 提供 / 注入</h2>
    <ChildComponent />
  </div>
</template>
