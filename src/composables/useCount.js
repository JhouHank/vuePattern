import { ref } from "vue";

export function useCounter(initialCount = 0) {
  const count = ref(initialCount);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return {
    count,
    increment,
    decrement,
  };
}