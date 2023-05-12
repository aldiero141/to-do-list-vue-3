<template>
  <button
    class="px-4 flex flex-column items-center align-center text-white rounded bg-blue-400"
    @click.stop="$emit('on:click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts"></script>
