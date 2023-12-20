import { defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";
import Error from "./Error.vue";

export const AsyncModal = defineAsyncComponent({
    loader:() => import("./AsyncModal.vue"),
    loadingComponent: Loading,
    errorComponent: Error,
});

// 簡單寫法
// export const AsyncModal = defineAsyncComponent(() => import("./AsyncModal.vue"));