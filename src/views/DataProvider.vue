<script setup>
import DataProvider from "../components/DataProvider/DataProvider.vue";
</script>

<template>
  <div class="container">
    <h2  class="text-center">數據提供者模式</h2>
    <DataProvider v-slot="{ data, loading }">
      <div class="joke-section ">
        <p v-if="loading">笑話正在載入...</p>
        <p v-if="!loading">笑話：{{ data.setup }}</p>
        <p v-if="!loading">答案：{{ data.punchline }}</p>
      </div>
    </DataProvider>

    <DataProvider v-slot="{ data, loading }">
      <p v-if="loading">稍等一下...</p>
      <div v-else class="joke-section">
        <details>
          <summary>笑話：{{ data.setup }}</summary>
          <p>答案：{{ data.punchline }}</p>
        </details>
      </div>
    </DataProvider>
  </div>
</template>

