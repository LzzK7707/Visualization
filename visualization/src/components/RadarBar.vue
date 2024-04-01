<script setup>
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
let myChart = null;
const target = ref(null);

onMounted(() => {
  myChart = echarts.init(target.value);
  renderChart();
});

const renderChart = () => {
  const options = {
    // 雷达图坐标系配置
    radar: {
      axisName: {
        color: '#05D5FF',
        fontSize: 14,
      },
      shape: 'polygon',
      center: ['50%', '50%'],
      radius: '80%',
      startAngle: 120,
      // 轴线
      axisLine: {
        lineStyle: {
          color: 'rgba(2,213,255,.8)',
        },
      },
      // 网格线
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: 'rgba(5,213,255,.8)',
        },
      },
      // 指示器名称
      indicator: props.data.risks.map((item) => ({
        name: item.name,
        max: 100,
      })),
      splitArea: {
        show: false,
      },
    },
    // 位置、极点
    polar: {
      center: ['50%', '50%'],
      radius: '0%',
    },
    // 坐标角度
    angleAxis: {
      min: 0,
      interval: 5,
      clockwise: false, //刻度逆时针
    },
    // 径向轴
    radiusAxis: {
      min: 0,
      interval: 20,
      splitLine: {
        show: true,
      },
    },
    // 图表核心配置
    series: {
      type: 'radar',
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: '#05D5FF',
      },
      areaStyle: {
        color: '#05D5FF',
        opacity: 0.5,
      },
      lineStyle: {
        with: 2,
        color: '#05D5FF',
      },
      label: {
        show: true,
        color: '#05D5FF',
      },
      data: [
        {
          value: props.data.risks.map((item) => item.value),
        },
      ],
    },
  };
  // 3.通过实例.setOptions(option)
  myChart.setOption(options);
};
watch(() => props.data, renderChart);
</script>
<template>
  <div>
    <div>【雷达图】</div>
    <div ref="target" class="w-full h-full"></div>
  </div>
</template>

<style></style>
