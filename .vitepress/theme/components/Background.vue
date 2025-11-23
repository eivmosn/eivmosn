<template>
  <div class="fixed inset-0 z-0 pointer-events-none">
    <div class="absolute inset-0 flex flex-col justify-between opacity-[0.03]">
      <div v-for="hLine, index in 20" :key="`${hLine}-${index}`" class="h-px w-full bg-white" />
    </div>
    <div class="absolute inset-0 flex justify-between opacity-[0.03]">
      <div v-for="vLine, index in 20" :key="`${vLine}-${index}`" class="h-full w-px bg-white" />
    </div>
    <!-- <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" /> -->
  </div>
</template>
