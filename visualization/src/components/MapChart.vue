<script setup>
import * as echarts from 'echarts';
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const target = ref(null);
let myChart = null;
onMounted(() => {
  myChart = echarts.init(target.value);
  renderChart();
});
const renderChart = () => {
  const options = {};
  myChart.setOption(options);
};

watch(props.data, () => {
  renderChart();
});
</script>

<template>
  <div>
    <div ref="target" class="w-full h-full"></div>
  </div>
</template>

<style></style>