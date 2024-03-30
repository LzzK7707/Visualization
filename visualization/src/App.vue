<script setup>
import HorizontalBar from './components/HorizontalBar.vue';
import MapChart from './components/MapChart.vue';
import RadarBar from './components/RadarBar.vue';
import Relation from './components/Relation.vue';
import Ringbar from './components/RingBar.vue';
import TotalData from './components/TotalData.vue';
import VerticalBar from './components/VerticalBar.vue';
import WordCloud from './components/WordCloud.vue';
import { getVisualization } from './api/visualization.js';
import { ref } from 'vue';

const data = ref(null);
const loadData = async () => {
  try {
    data.value = await getVisualization();
    console.log(data.value);
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

setInterval(() => {
  loadData();
}, 3000);

loadData();
</script>

<template>
  <div
    class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden"
    v-if="data"
  >
    <!-- left -->
    <div class="flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex-col">
      <!-- 横向柱状图 -->
      <HorizontalBar class="h-1/3 box-border pb-4" :data="data.regionData" />
      <!-- 雷达图 -->
      <RadarBar class="h-1/3 box-border pb-4" />
      <!-- 数据传递关系图 -->
      <Relation />
    </div>
    <!-- center -->
    <div class="w-1/2 mr-5 flex flex-col">
      <!-- 数据总览 -->
      <TotalData class="bg-opacity-50 bg-slate-800 p-3 flex-1" />
      <!-- 地图可视化 -->
      <MapChart class="bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1" />
    </div>
    <!-- right -->
    <div class="flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex-col">
      <!-- 竖向柱状图 -->
      <VerticalBar class="h-1/3 box-border pb-4" :data="data.serverData" />
      <!-- 环形图 -->
      <Ringbar class="h-1/3 box-border pb-4" />
      <!-- 文档云图 -->
      <WordCloud />
    </div>
  </div>
</template>

<style></style>
