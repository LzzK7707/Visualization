<script setup>
import { CountUp } from 'countup.js'
import { onMounted, ref } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const totalCountTarget = ref(null)
const city1 = ref(null)
const city2 = ref(null)
const city3 = ref(null)
const city4 = ref(null)
const city5 = ref(null)
const city6 = ref(null)

onMounted(() => {
  new CountUp(totalCountTarget.value, props.data.total).start()
  new CountUp(city1.value, props.data.total).start()
  new CountUp(city2.value, props.data.total).start()
  new CountUp(city3.value, props.data.total).start()
  new CountUp(city4.value, props.data.total).start()
  new CountUp(city5.value, props.data.total).start()
  new CountUp(city6.value, props.data.total).start()
})
</script>
<template>
  <div>
    <div class="p-6">
      <!-- 总数据 -->
      <div class="text-slate-300 text-center">
        数据总量：
        <span ref="totalCountTarget" class="text-gradient font-[Electronic] text-7xl ml-2 mr-2 font-bold">
          679,473,929
        </span>
        条记录
      </div>
      <!-- 其他数据 -->
      <div class="mt-3 flex flex-wrap">
        <div class="w-1/3 text-center text-slate-400 text-sm">
          华北：<span ref="city1" class="font-[Electronic] text-[#5dc5ef] text-3xl">9,778,988</span>
        </div>
        <div class="w-1/3 text-center text-slate-400 text-sm">
          东北：<span ref="city2" class="font-[Electronic] text-[#5dc5ef] text-3xl">9,778,988</span>
        </div>
        <div class="w-1/3 text-center text-slate-400 text-sm">
          华东：<span ref="city3" class="font-[Electronic] text-[#5dc5ef] text-3xl">9,778,988</span>
        </div>
        <div class="w-1/3 text-center text-slate-400 text-sm">
          中南：<span ref="city4" class="font-[Electronic] text-[#5dc5ef] text-3xl">9,778,988</span>
        </div>
        <div class="w-1/3 text-center text-slate-400 text-sm">
          西南：<span ref="city5" class="font-[Electronic] text-[#5dc5ef] text-3xl">9,778,988</span>
        </div>
        <div class="w-1/3 text-center text-slate-400 text-sm">
          西北：<span ref="city6" class="font-[Electronic] text-[#5dc5ef] text-3xl">9,778,988</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
