import { reactive } from "vue";

export const store = reactive({
  numbers: [7, 8, 9],
  addNumber(newNumber) {
    this.numbers.push(newNumber);
  },
});