<script>
  import { onMount, tick } from "svelte";
  import Table from "../../components/Table.svelte";
  import { countryDataStore } from "../../stores/countryDataStore.js";

  //   export let data;
  let countries=[];
  
//   $: {
//     console.log('countries: ', countries)
//   }
  

  onMount( async () => {
    countryDataStore.subscribe((data) => {
        countries = data;
    //   console.log(data)
    });
    // await tick();
  });
</script>

<div class="container mx-auto">
  data table
  <Table {countries}/>
</div>

<style>
</style>
