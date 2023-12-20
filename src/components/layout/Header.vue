<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="d-flex flex-column bg-warning fs-5 gap-3">
    <div class="d-flex justify-content-center gap-3">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/components">Components</RouterLink>
      <RouterLink to="/composables">Composables</RouterLink>
      <RouterLink to="/container-presentational">ContainerPresentational</RouterLink>
    </div>
    <div class="d-flex justify-content-center gap-3">
      <RouterLink to="/data-provider">DataProvider</RouterLink>
      <RouterLink to="/dynamic-components">DynamicComponents</RouterLink>
      <RouterLink to="/provide-inject">ProvideInject</RouterLink>
      <RouterLink to="/script-setup">ScriptSetup</RouterLink>
    </div>
    <div class="d-flex justify-content-center gap-3">
      <RouterLink to="/state-management">StateManagement</RouterLink>
      <RouterLink to="/render-functions">RenderFunctions</RouterLink>
      <RouterLink to="/renderless-components">RenderlessComponents</RouterLink>
      <RouterLink to="/async-components">AsyncComponents</RouterLink>
    </div>
  </header>
</template>
