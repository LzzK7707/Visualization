<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const target = ref(null)
let myChart = null
onMounted(() => {
  myChart = echarts.init(target.value)
  renderChart()
})
/** @type EChartsOption */
const renderChart = () => {
  const options = {
    // 时间线
    timeline: {
      data: props.data.voltageLevel,
      axisType: 'category',
      autoPlay: true,
      playInterval: 3000,
      left: '10%',
      right: '10%',
      bottom: '0%',
      width: '80%',
      label: {
        color: '#ddd'
      }
    },
    baseOption: {
      grid: {
        right: '2%',
        top: '15%',
        bottom: '10%',
        width: '20%'
      }
    },
    options: []
  }
  props.data.voltageLevel.forEach((item, index) => {
    options.options.push({
      backgroundColor: '#142037',
      title: [
        {
          text: '2019-2023年度数据统计',
          left: '0%',
          top: '0%',
          textStyle: {
            color: '#ccc',
            fontSize: 30
          }
        },
        {
          id: 'statistic',
          text: item + '年数据统计情况',
          right: '0%',
          top: '4%',
          textStyle: {
            color: '#ccc',
            fontSize: 20
          }
        }
      ]
    })
  })
  myChart.setOption(options)
}

watch(props.data, () => {
  renderChart()
})
</script>

<template>
  <div>
    <div ref="target" class="w-full h-full"></div>
  </div>
</template>

<style></style>
