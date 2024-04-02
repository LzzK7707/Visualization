<script setup>
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

//初始化 echarts 实例
let myChart = null;
const target = ref(null);
onMounted(() => {
  myChart = echarts.init(target.value);
  renderChart();
});

// 构建option配置对象
const renderChart = () => {
  const options = {
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    series: [
      {
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: 75,
        z: 3,
        edgeLabel: {
          show: true,
          color: '#fff',
          fontSize: 10,
          formatter: function(params) {
            return params.data.speed;
          }
        },
        label: {
          show: true,
          position: 'bottom',
          color: '#5E5E5E'
        },
        edgeSymbol: ['none', 'arrow'],
        edgeSymbolSize: 8,
        data: props.data.relations.map((item) => {
          if (item.id === 0) {
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
              symbolSize: 30,
              itemStyle: {
                color: {
                  colorStops: [
                    { offset: 0, color: '#157EFF' },
                    { offset: 1, color: '#35C2FF' }
                  ]
                }
              },
              label: {
                fontSize: '10'
              }
            };
          }
        }),
        links: props.data.relations.map((item) => ({
          source: item.source,
          target: item.target,
          speed: `${item.speed}kb/s`,
          lineStyle: {
            color: '#12b5d0',
            curveness: 0.2
          },
          label: {
            show: true,
            position: 'middle',
            offset: [10, 0]
          }
        }))
      },
      {
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        z: 1,
        effect: {
          show: true,
          smooth: false,
          trailLength: 0,
          symbol: 'arrow',
          color: 'rgba(55,155,255,0.6)',
          symbolSize: 12
        },
        lineStyle: {
          curveness: 0.2
        },
        data: [
          [{ coord: [0, 300] }, { coord: [50, 200] }],
          [{ coord: [0, 100] }, { coord: [50, 200] }],
          [{ coord: [50, 200] }, { coord: [100, 100] }],
          [{ coord: [50, 200] }, { coord: [100, 300] }]
        
        ]
      }
    ]
  };
  
  myChart.setOption(options);
};

//监听数据变化
watch(
  () => props.data,
  () => renderChart()
);
</script>

<template>
  <div>
    <div>【数据传递信息】</div>
    <div ref="target" style="height:100%;width:100%;"></div>
  </div>
</template>