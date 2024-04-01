<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});
let myChart = null;
const target = ref();
onMounted(() => {
  myChart = echarts.init(target.value);
  renderChart();
});
const renderChart = () => {
  const options = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: 26,
        z: 3,
        edgeLabel: {
          show: true,
          color: '#fff',
          textStyle: {
            fontsize: 14
          },
          formatter: function (params) {
            return params.data.speed;
          }
        },
        label: {
          shou: true,
          position: 'bottom',
          color: '#5E5E5E'
        },
        edgeSymbol: ['none', 'arrow'],
        edgeSymbolSize: 8,
        data: props.data.relations.map((item) => {
          if (item.id !== 0) {
            return {
              name: item.name,
              category: 0,
              active: true,
              speed: `${item.speed}kb/s`,
              value: item.value
            };
          } else {
            return {
              name: item.name,
              value: item.value,
              symbolSize: 100,
              itemStyle: {
                color: {
                  colorStops: [
                    {
                      offset: 0,
                      color: '#157eff'
                    },
                    {
                      offset: 1,
                      color: '#35c2ff'
                    }
                  ]
                }
              },
              label: {
                fontsize: '14'
              }
            };
          }
        }),
        links: props.data.relations.map
      }
    ]
  };
  myChart.setOption(options);
};
</script>

<template>
  <div>
    <div>【数据展传递信息】</div>
    <div ref="target" class="w-full h-full"></div>
  </div>
</template>

<style></style>
