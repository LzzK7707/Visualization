<template>
  <div class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden">
    <!-- left -->
    <div class="flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex-col">
      <!-- 横向柱状图 -->
      <HorizontalBar class="h-1/3 box-border  pb-4" />
      <!-- 雷达图 -->
      <RadarBar class="h-1/3 box-border  pb-4" />
      <!-- 数据传递关系图 -->
      <Relation />
    </div>
    <!-- center -->
    <div class="w-1/2 mr-5 flex flex-col">
      <!-- 数据纵览 -->
      <TotalData class="bg-opacity-50 bg-slate-800 p-3 flex-1" />
      <!-- 地图可视化 -->
      <MapChart class="bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1" />
    </div>
    <!-- right -->
    <div class="flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex-col">
      <!-- 纵向柱状图 -->
      <VerticalBar class="h-1/3 box-border pb-4" />
      <!-- 环形图 -->
      <Ringbar class="h-1/3 box-border pb-4" />
      <!-- 文档云图 -->
      <WordCloud />
    </div>
  </div>
</template>

<script>
import HorizontalBar from './components/HorizontalBar/index.vue'
import MapChart from './components/MapChart/index.vue'
import RadarBar from './components/RadarBar/index.vue'
import Relation from './components/Relation/index.vue'
import Ringbar from './components/RingBar/index.vue'
import TotalData from './components/TotalData/index.vue'
import VerticalBar from './components/VerticalBar/index.vue'
import wordCloud from './components/WordCloud/index.vue'

export default {
  name: 'App',
  components: {
    HorizontalBar,
    MapChart,
    RadarBar,
    Relation,
    Ringbar,
    TotalData,
    VerticalBar,
    wordCloud
  }
}
</script>