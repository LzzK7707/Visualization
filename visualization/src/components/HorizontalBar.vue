<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  data: {
    type: Object,
    require: true,
  },
})
// 1.初始化实例
let myChart = ref(null) // TODO为什么要把mayChart定义成响应式数据
const target = ref(null)
onMounted(() => {
  myChart = echarts.init(target.value)
})
// 2.构建option配置对象
const renderChart = () => {
  const options = {
    // x轴
    xAxis: {},
    // y轴
    yAxis: {},
    // 图标位置
    grid: {},
    // 核心配置
    series: [],
  }
}
</script>

<template>
  <div>
    <div>大区数据消息</div>
    <div class="target" ref="target"></div>
  </div>
</template>

<style lang="scss">
.target {
  width: 100%;
  height: 100%;
}
</style>
