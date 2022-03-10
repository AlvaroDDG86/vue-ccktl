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
    <p v-if="regimenSelected === null" class="regimens__feedback">
      Please select a regimen
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRegimensStore } from "@/store/regimens.store";
import { Regimen } from "@/domain/entities/Regimen";
import RegimenSelectable from "@/components/RegimenSelectable.vue";
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
    const regimenSelected = computed(
      (): Regimen | null => regimensStore.regimenSelected
    );
    const updateActiveHandler = (activePlan: string) => {
      active.value = activePlan;
      regimensStore.setActiveRegimen(active.value);
    };

    return {
      active,
      regimens,
      regimenSelected,
      updateActiveHandler,
    };
  },
});
</script>
<style lang="scss">
.regimens {
  padding-top: 5em;
  width: 100vw;
  min-width: 300px;
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $color-gray-extra-light;

  &__container {
    display: flex;
    justify-content: space-around;
    align-content: stretch;
    flex-wrap: wrap;
  }

  &__feedback {
    padding: 0.5em 1em;
    text-align: center;
    margin: 0.5em 0;
    font-weight: $font-bold;
    color: $color-blue-mid-light;
    font-size: $font-m;
    background: $color-gray-light;
  }
}
</style>
