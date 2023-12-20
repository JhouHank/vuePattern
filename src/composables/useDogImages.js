import { ref, onMounted } from "vue";

export default function useDogImages() {
  const dogs = ref([]);

  onMounted(async () => {
    const response = await fetch(
      "https://dog.ceo/api/breed/labrador/images/random/6"
    );
    const { message } = await response.json();
    dogs.value = message;
  });

  return { dogs };
}