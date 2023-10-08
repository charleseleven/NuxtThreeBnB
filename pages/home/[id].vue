<template>
  <div>{{ home.title }}</div>
</template>

<script setup>
import { onMounted } from "vue";
import homes from "~/data/homes";

const route = useRoute();
const home = homes.find((home) => home.objectID === route.params.id);

onMounted(() => {
  home.value = home;

  console.log(route.params);
  console.log(home.value);
});
</script>

<style lang="scss" scoped></style>
