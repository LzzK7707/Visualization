<script setup>
const props = defineProps({
  data: {
    type: Object,
    require: true,
  },
})

console.log(props.data)
</script>

<template>
  <div>横向柱状图</div>
</template>

<style></style>
