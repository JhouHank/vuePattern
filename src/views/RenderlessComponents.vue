<script setup>
import ToggleComponent from "../components/RenderlessComponents/ToggleComponent.vue"
</script>

<template>
  <div class="container">
    <h2 class="text-center">Renderless Components 無渲染組件</h2>
    <ToggleComponent v-slot="{ checkbox, toggleCheckbox }">
      <div class="comp">
        <label class="switch">
          <input type="checkbox" :value="checkbox" @click="toggleCheckbox" />
          <div class="slider rounded" :class="checkbox ? 'active' : ''"></div>
        </label>
      </div>
    </ToggleComponent>

    <ToggleComponent v-slot="{ checkbox, toggleCheckbox }">
      <div class="comp">
        <button class="toggle-button" @click="toggleCheckbox">
          Toggle | <span>{{ checkbox ? "Yes 😀" : "No 😔" }}</span>
        </button>
      </div>
    </ToggleComponent>
    
    <ToggleComponent v-slot="{ checkbox, toggleCheckbox }">
      <div class="comp">
        <button
          :class="['tab-button', { active: checkbox }]"
          @click="toggleCheckbox"
        >
          On
        </button>
        <button
          :class="['tab-button', { active: !checkbox }]"
          @click="toggleCheckbox"
        >
          Off
        </button>
      </div>
    </ToggleComponent>
  </div>
</template>
<style scoped>
.comp {
  margin-bottom: 70px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e5e7eb;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:focus + .slider {
  box-shadow: 0 0 1px #5244df;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.rounded {
  border-radius: 34px;
}

.slider.rounded:before {
  border-radius: 50%;
}

.slider.active {
  background-color: #5244df;
}

/* --- */

button {
  height: 38px;
  padding: 0 15px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}

button.toggle-button {
  color: #fff;
  background-color: #5244df;
  border-radius: 4px;
  border: 1px solid #5244df;
}

button span {
  font-weight: 800;
}

.tab-button {
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  color: black;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  box-shadow: 0 0 1px #5244df;
}

.tab-button.active {
  background: #5244df;
  border: 1px solid #5244df;
  color: #ffffff;
  font-weight: bold;
}

.tab {
  padding: 10px;
}

</style>
