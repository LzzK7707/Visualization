<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
// 1.初始化实例
// 2.构建options配置对象
// 3.
let myChart = null;
const target = ref(null);
onMounted(() => {
  myChart = echarts.init(target.value);
  renderChart();
});
const renderChart = () => {
  const options = {
    //x
    xAxis: {
      type: 'category',
      data: props.data.serves.map((item) => item.name),
      axisLabel: {
        color: '#9EB1C8',
      },
    },
    yAxis: {
      type: 'value',
      show: false,
      max: function (value) {
        return parseInt(value.max * 1.2);
      },
    },
    grid: {},
    seried: [],
  };
  myChart.setOption(options);
};
</script>

<template>
  <div>
    <div ref="target" class="w-full h-full"></div>
    <div>【服务资源占用比】</div>
  </div>
</template>

<style></style>
