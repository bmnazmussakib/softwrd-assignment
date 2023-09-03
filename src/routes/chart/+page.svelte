<script>
  import { onMount } from "svelte";
  import Table from "../../components/Table.svelte";
  import { countryDataStore } from "../../stores/countryDataStore.js";
  import Chart from "./../../components/Chart.svelte";

  let countries = [];

  $: {
    console.log("countries: ", countries);
  }

  onMount(async () => {
    await countryDataStore?.subscribe((data) => {
      countries = data;
    });
  });
</script>

<div class="bg-gray-400 h-screen">
  <div class="container mx-auto flex p-6">
    <div class="table-container basis-3/4 border-2 rounded m-3 bg-white">
      <Table {countries} />
    </div>
    <div class="chart-container basis-1/4 border-2 rounded m-3 bg-white">
      <div class="p-2 font-bold border">Countries</div>
      <Chart {countries} />
    </div>
  </div>
</div>

<style>
</style>
