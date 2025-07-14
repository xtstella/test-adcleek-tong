<template>
  <div class="row row-cols-2 g-3">
    <div v-if="forecast[0]" class="col">
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

    <div v-if="forecast[1]" class="col">
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

    <div v-if="forecast[2]" class="col">
      <div class="card text-center p-3">
        <div class="mt-2">Probability of rain</div>
        <div class="fs-3 fw-bold">{{ forecast[2].probarain }} mm</div>
        <div class="d-flex justify-content-around mt-2">
          <div>
            <small>Min</small>
            <div>{{ forecast[2].tmin }}°C</div>
          </div>
          <div>
            <small>Max</small>
            <div>{{ forecast[2].tmax }}°C</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="forecast[3]" class="col">
      <div class="card text-center p-3">
        <div class="mt-2">Probability of rain</div>
        <div class="fs-3 fw-bold">{{ forecast[3].probarain }} mm</div>
        <div class="d-flex justify-content-around mt-2">
          <div>
            <small>Min</small>
            <div>{{ forecast[3].tmin }}°C</div>
          </div>
          <div>
            <small>Max</small>
            <div>{{ forecast[3].tmax }}°C</div>
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
