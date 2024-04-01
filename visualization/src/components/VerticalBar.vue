<script setup>
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

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
      data: props.data.servers.map((item) => item.name),
      axisLabel: {
        color: '#9EB1C8',
      },
    },
    yAxis: {
      type: 'value',
      show: false,
      max: function(value) {
        return parseInt(value.max * 1.2);
      },
    },
    grid: {
      top: 16,
      right: 0,
      bottom: 26,
      left: -26,
      // 计算边距的时候包含标签
      containLabel: true,
    },
    series: [
      {
        // 柱形图
        type: 'bar',
        data: props.data.servers.map((item) => ({
          name: item.name,
          value: item.value,
        })),
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
        itemStyle: {
          color: '#5D98CE',
          borderRadius: 5,
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowBlur: 5,
        },
        barWidth: 12,
        label: {
          show: true,
          position: 'top',
          color: '#fff',
          formatter: '{c}%',
        },
      },
    ],
  };
  myChart.setOption(options);
};

watch(
  () => props.data,
  () => {
    renderChart();
  },
);
</script>

<template>
  <div>
    <div>【服务资源占用比】</div>
    <div ref="target" class="w-full h-full"></div>
  </div>
</template>

<style></style>