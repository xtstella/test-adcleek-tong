<template>
  <div class="table-scroll">
    <table class="table table-hover table-striped border">
      <thead class="table-primary text-center">
        <tr>
          <th>Code INSEE</th>
          <th>City</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="city in cities"
          :key="city.insee"
          class="city-row text-center"
        >
          <td>{{ city.insee }}</td>
          <td class="fw-semibold text-dark">{{ city.name }}</td>
          <td class="text-secondary">{{ city.population.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps(["cities"]);

</script>

<style scoped>
.table-scroll {
  max-height: 400px;
  overflow-y: auto;
}
.city-row {
  transition: background-color 0.2s ease;
}
.city-row:hover {
  background-color: #f0f8ff;
  cursor: pointer;
}
.table th {
  white-space: nowrap;
}
.table td, .table th {
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
</style>
