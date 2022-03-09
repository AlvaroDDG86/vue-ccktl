<template>
  <div class="regimens">
    <h1>Regimens page</h1>
    <div class="regimens__container">
      <RegimenSelectable
        class="regimens__regimen"
        v-for="(regimen, index) in regimens"
        :key="`regimen_${index}`"
        :id="index.toString()"
        :title="regimen.title"
        :includes="regimen.includes"
        :active="active"
        name="regimens"
        @onUpdateActive="updateActiveHandler"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRegimensStore } from "@/store/regimens.store";
import { Regimen } from "@/domain/entities/Regimen";
import RegimenSelectable from '@/components/RegimenSelectable.vue'
export default defineComponent({
  name: "Regimens",
  components: {
    RegimenSelectable,
  },
  setup() {
    const active = ref("");
    const regimensStore = useRegimensStore();
    regimensStore.getRegimens();
    const regimens = computed((): Regimen[] => regimensStore.regimens);
    const updateActiveHandler = (activePlan: any) => {
      active.value = activePlan;
    }

    return {
      active,
      regimens,
      updateActiveHandler,
    };
  },
});
</script>
<style lang="scss">
.regimens {
  width: 100vw;

  &__container {
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
  }
}
</style>
