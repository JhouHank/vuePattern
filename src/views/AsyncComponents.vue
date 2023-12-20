<script setup>
import { ref } from "vue";
import Modal from "../components/AsyncComponents/Modal.vue";
import { AsyncModal } from "../components/AsyncComponents/AsyncModal.js";

const showModal = ref(false);
const showAsyncModal = ref(false);
</script>

<template>
  <div class="container">
    <h2 class="text-center">Async Components 異步組件</h2>
    <div class="mb-3">
      <button id="show-modal" @click="showModal = true" class="btn btn-primary">Show Modal</button>
      <Modal v-if="showModal" :show="showModal" @close="showModal = false" />
      <hr/>
      <button id="show-modal" @click="showAsyncModal = true" class="btn btn-success">Show AsyncModal</button>
      <p>注意看一開始開發人員工具的 Network</p>
      <p>載入的是 AsyncModel.js</p>
      <p>點擊按鈕後才載入 AsyncModel.vue</p>
      <AsyncModal v-if="showAsyncModal" :show="showAsyncModal" @close="showAsyncModal = false" />
    </div>
  </div>
</template>
