<script>
  import Chart from "./../../components/Chart.svelte";
  import { onMount, tick } from "svelte";
  import Table from "../../components/Table.svelte";
  import { countryDataStore } from "../../stores/countryDataStore.js";

  let countries = [];

    $: {
      console.log('countries: ', countries)
    }

  onMount(async () => {
    await countryDataStore?.subscribe((data) => {
     countries = data;
    });
  });
</script>

<div class="container mx-auto flex">
  <div class="table-container basis-3/4 gap-4">
    <Table {countries} />
  </div>
  <div class="chart-container basis-1/4 gap-4">
    <Chart {countries} />
  </div>
</div>

<style>
</style>
