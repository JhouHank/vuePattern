import { ref, reactive } from "vue";

const API_ENDPOINT_URL = "https://official-joke-api.appspot.com/random_joke";

export function useGetJoke() {
  const data = reactive({
    setup: null,
    punchline: null,
  });
  const loading = ref(false);

  const fetchJoke = async () => {
    loading.value = true;

    const response = await fetch(API_ENDPOINT_URL);
    const responseData = await response.json();

    data.setup = responseData.setup;
    data.punchline = responseData.punchline;
    loading.value = false;
  };

  fetchJoke();

  return { data, loading };
}