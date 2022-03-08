<template>
  <div class="regimens">
    <h1>Regimens page</h1>
    <div class="regimens__container">
      <div
        class="regimens__regimen"
        v-for="(regimen, index) in regimens"
        :key="`regimen_${index}`"
      >
        <h3>{{ regimen.title }}</h3>
        <ul class="regimens__list">
          <li
            v-for="(include, index) in regimen.includes"
            :key="`include_${index}`"
          >
            {{ include }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRegimensStore } from "@/store/regimens.store";
import { Regimen } from "@/domain/entities/Regimen";
export default defineComponent({
  name: "Regimens",
  setup() {
    const regimensStore = useRegimensStore();
    regimensStore.getRegimens();
    const regimens = computed((): Regimen[] => regimensStore.regimens);

    return {
      regimens,
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

  &__regimen {
    margin: 1rem 1.2rem;
    width: 150px;
    padding: 0.5rem 1rem;
    border: solid 1px black;
  }

  &__list {
    padding-left: 10px;
  }
}
</style>
