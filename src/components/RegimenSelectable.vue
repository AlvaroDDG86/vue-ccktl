<template>
  <div
    class="regimen-selectable"
    :class="{ 'regimen-selectable--active': isActive }"
  >
  {{isActive}}
    <h2 class="regimen-selectable__title">
      {{ title }}
    </h2>
    <div class="regimens__separator"></div>
    <ul class="regimen-selectable__list">
      <li v-for="(include, index) in includes" :key="`include_${index}`">
        {{ include }}
      </li>
    </ul>
    <footer>
      <button class="regimen-selectable__button">
        <input
          type="radio"
          :name="name"
          :id="id"
          :checked="isActive"
          @change="updateActiveHandler"
        />
        <label :for="id">Select this</label>
      </button>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { computed, toRefs, defineProps, defineEmits } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  includes: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  active: {
    type: String,
    required: true,
  },
});
const { id, active } = toRefs(props);
const isActive = computed((): boolean => active.value === id.value);
const emit = defineEmits(["onUpdateActive"]);
const updateActiveHandler = () => {
  emit("onUpdateActive", id.value);
};
</script>
<style lang="scss">
.regimen-selectable {
  width: 200px;
  height: fit-content;
  padding: 5px 10px;
  box-sizing: border-box;
  border: solid 1px $color-blue-light;

  &__title {
    color: $color-blue-mid-light;
    font-weight: $font-bold;
  }

  &__separator {
    background-color: $color-blue-light;
    width: 4rem;
    height: 1px;
    margin: auto;
  }

  &__list {
    padding-left: 10px;
  }

  &--active {
  }

  &__button {
    background: gray;
  }
}
</style>
