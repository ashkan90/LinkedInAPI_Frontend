<template>
  <div>
    <span v-for="(it, i) in items" :key="i">
      {{ it }}
      <span v-if="i === 0 || i % 3 === 1"> |</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Crumby',
  props: ['items'],
};
</script>
