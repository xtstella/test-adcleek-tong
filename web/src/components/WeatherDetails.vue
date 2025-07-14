<template>
  <div class="row row-cols-2 g-3">
    <!-- Day 1 card -->
    <div class="col">
      <div class="card text-center p-3">
        <div class="mt-2">Probability of rain</div>
        <div class="fs-3 fw-bold">{{ forecast[0].probarain }} mm</div>
        <div class="d-flex justify-content-around mt-2">
          <div>
            <small>Min</small>
            <div>{{ forecast[0].tmin }}°C</div>
          </div>
          <div>
            <small>Max</small>
            <div>{{ forecast[0].tmax }}°C</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Day 2 card -->
    <div class="col">
      <div class="card text-center p-3">
        <div class="mt-2">Probability of rain</div>
        <div class="fs-3 fw-bold">{{ forecast[1].probarain }} mm</div>
        <div class="d-flex justify-content-around mt-2">
          <div>
            <small>Min</small>
            <div>{{ forecast[1].tmin }}°C</div>
          </div>
          <div>
            <small>Max</small>
            <div>{{ forecast[1].tmax }}°C</div>
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
