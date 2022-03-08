<template>
  <div class="regimens">
    <h1>Regimens page</h1>
    {{ regimens }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRegimensStore } from "@/store/regimens.store";
export default defineComponent({
  name: "Regimens",
  setup() {
    const regimensStore = useRegimensStore();
    regimensStore.getRegimens();
    const regimens = computed(() => regimensStore.regimens);

    return {
      regimens,
    };
  },
});
</script>
