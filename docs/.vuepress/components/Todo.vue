<template>
  <div class="todo">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
.todo {
  padding: 0.05rem 1.25rem;
  margin: 0.5rem 0;
  color: #856404;
  background-color: #fff3cd8c;
  font-weight: bold;
  border-radius: 0.05rem;
  border: 0.1rem solid #ffeeba;
  border-left: 0.3rem solid rgba(236, 202, 109, 0.719);
}
</style>