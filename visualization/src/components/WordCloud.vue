<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import 'echarts-wordcloud';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

// 1
const target = ref();
let myChart = null;
onMounted(() => {
  myChart = echarts.init(target.value);
  renderChart();
});

const randomRGB = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  
  return `rbg(${r}, ${g}, ${b})`;
};
// 2
const renderChart = () => {
  const options = {
    series: {
      type: 'wordCloud',
      sizeRange: [8, 46],
      rotationRange: [0, 0],
      gridSize: 0,
      layoutAnimation: true,
      textStyle: {
        color: randomRGB
      }
    }
  };
  myChart.setOption(options);
};


</script>
<template>
  <div>
    <div>文档云图</div>
    <div ref="target" class="h-full w-full"></div>
  </div>
</template>


<style></style>