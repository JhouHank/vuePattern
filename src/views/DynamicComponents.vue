<script setup>
import { ref } from "vue";
import Home from "../components/DynamicComponents/Home.vue";
import Feed from "../components/DynamicComponents/Feed.vue";
import History from "../components/DynamicComponents/History.vue";

const currentTab = ref("Home");
const currentTabAlive = ref("Home");
const tabs = {
  Home,
  Feed,
  History,
};
const tabsAlive = {
  Home,
  Feed,
  History,
}
</script>

<template>
  <div class="container">
    <h2 class="text-center">Dynamic Components 動態組件</h2>
    <div class="demo">
      <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['btn btn-primary m-1 tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
      <component :is="tabs[currentTab]" class="tab"></component>
    </div>
    <hr/>
    <h2>下面是有加 KeepAlive 的部分</h2>
    <div class="demo">
      <button
        v-for="(_, tab) in tabsAlive"
        :key="tab"
        :class="['btn btn-primary m-1 tab-button', { active: currentTabAlive === tab }]"
        @click="currentTabAlive = tab"
      >
        {{ tab }}
      </button>
      <KeepAlive>
        <component :is="tabs[currentTabAlive]" class="tab"></component>
      </KeepAlive>
    </div>
  </div>
  
</template>
