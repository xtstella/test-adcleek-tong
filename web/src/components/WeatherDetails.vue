<template>
  <div class="row row-cols-2 g-3">
    <div v-for="(item, index) in forecast" :key="index" class="col">
      <div class="card text-center p-3">
        <div class="mt-2">Probability of rain</div>
        <div class="fs-3 fw-bold">{{ item.probarain }} mm</div>
        <div class="d-flex justify-content-around mt-2">
          <div>
            <small>Min</small>
            <div>{{ item.tmin }}°C</div>
          </div>
          <div>
            <small>Max</small>
            <div>{{ item.tmax }}°C</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  forecast: Object,
});
</script>
