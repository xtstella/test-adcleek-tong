<template>
  <div class="row row-cols-2 g-3">
    <div
      v-for="(detailByDay, index) in forecastDetails"
      :key="index"
      class="col"
    >
      <div class="card text-center p-3">
        <i :class="`bi bi-${detailByDay.icon} fs-1`"></i>
        <div class="mt-2">Probability of rain</div>
        <div class="fs-3 fw-bold">{{ detailByDay.rain }} mm</div>
        <div class="d-flex justify-content-around mt-2">
          <div>
            <small>Min</small>
            <div>{{ detailByDay.tmin }}°C</div>
          </div>
          <div>
            <small>Max</small>
            <div>{{ detailByDay.tmax }}°C</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  forecastDetails: {
    type: Object,
    default: () => ({ details: [] }),
  },
});
</script>
