import { ref, onMounted, onBeforeUnmount } from "vue";

export function useWidth() {
  const width = ref(0);

  function handleResize() {
    width.value = window.innerWidth;
  }

  onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });

  return {
    width,
  };
}