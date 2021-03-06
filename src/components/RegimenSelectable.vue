<template>
  <div
    class="regimen-selectable"
    :class="{ 'regimen-selectable--active': isActive }"
    @click.prevent="updateActiveHandler"
  >
    <h2 class="regimen-selectable__title">
      {{ title }}
    </h2>
    <div class="regimen-selectable__separator"></div>
    <ul class="regimen-selectable__list">
      <li v-for="(include, index) in includes" :key="`include_${index}`">
        {{ include }}
      </li>
    </ul>
    <footer class="regimen-selectable__footer">
      <button class="regimen-selectable__button">
        <input
          type="radio"
          :name="name"
          :id="id"
          :checked="isActive"
          @change="updateActiveHandler"
        />
        <label :for="id">Elegir régimen</label>
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  min-height: 400px;
  margin: 5px;
  padding: 0 1em 0.5em;
  border: solid 2px $color-blue-light;
  background: $color-white;

  &--active {
    border: solid 2px $color-blue-mid;

    .regimen-selectable__button {
      border: solid 1px $color-blue-mid;
      opacity: 1;
    }
  }

  &__title {
    color: $color-blue-mid-light;
    font-weight: $font-bold;
    font-size: $font-xs;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 4em;
  }

  &__separator {
    background-color: $color-blue-light;
    width: 40%;
    height: 1px;
    margin: 0 auto 1em;
  }

  &__list {
    padding-left: 10px;
    font-size: $font-xxs;
    font-family: $font-second;
    font-weight: $font-mid;

    & > li {
      text-align: left;
      margin-bottom: 8px;
    }
  }

  &__footer {
    margin-top: auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }

  &__button {
    cursor: pointer;
    & > input[type="radio"] {
      margin: 0 10px;
      cursor: pointer;
    }
    & > label {
      cursor: pointer;
    }
    color: $color-blue-mid;
    width: 100%;
    height: 3em;
    background: $color-gray-extra-light;
    outline: none;
    border: solid 1px transparent;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    opacity: 0.7;
  }
}
@media only screen and (max-width: $mobile) {
  .regimen-selectable {
    width: 250px;
    min-height: 400px;
    &__list {
      display: initial;
    }
  }
}
@media screen and (min-width: $mobile) and (max-width: $tablet) {
  .regimen-selectable {
    width: 150px;
    min-height: 200px;
    &__list {
      display: none;
    }
  }
}
</style>
