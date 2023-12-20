import { ref } from "vue";
import { defineStore } from "pinia";

export const useNumbersStore = defineStore("numbers", () => {
  const numbers = ref([1, 2, 3]);

  function addNumber(newNumber) {
    this.numbers.push(newNumber);
  }

  return { numbers, addNumber };
});