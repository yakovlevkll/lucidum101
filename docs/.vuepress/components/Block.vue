<template>
  <div class="block" :class="bodyStyle">
    <div class="block-header" :class="headerStyle">{{ title }}</div>
    <div class="block-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["type"],
  data() {
    return {
      titles: {
        nb: "NB",
        tasks: "Задания",
        example: "Пример"
      }
    };
  },
  computed: {
    title() {
      return this.titles[this.type];
    },
    headerStyle() {
      return `header-${this.type}`;
    },
    bodyStyle() {
      return `block-${this.type}`;
    }
  }
});
</script>

<style>
.block {
  margin: 2rem 0;

  overflow: hidden;

  border-top-left-radius: 0.05rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 0.05rem;
  border-bottom-left-radius: 0.05rem;
  border-width: 0.1rem;
  border-style: solid;
}

.block-header {
  display: block;
  float: right;

  margin: 0 0 0.25rem 0.25rem;
  padding: 0.5rem 1.5rem;

  color: white;
  font-size: 1rem;

  border-bottom-left-radius: 20px;
}

.block-contents {
  margin: 0rem 1.25rem;
}

.block-nb {
  background: #4dd8992d;
  border-color: #4dd89931;
}

.block-tasks {
  background: #4db8d81f;
  border-color: #4db8d832;
}

.block-example {
  background: #d89c4d1f;
  border-color: #d8974d32;
}

.header-nb {
  background: #4dd899;
}

.header-tasks {
  background: #4db8d8;
}

.header-example {
  background: #e98121;
}
</style>