<script>
  // your script goes here
  export let countries = [];
  //   const countryData = data.countriesData;
  //   console.log(countryData);
  // $: {
  //   console.log('countryData: ', countries)
  // }
</script>

<div class="table-container overflow-x-auto">
  <table class="min-w-full divide-y divide-gray-200 border-collapse">
    <thead>
      <tr class="bg-gray-200">
        <th
          class="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >Flag</th
        >
        <th
          class="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >Name</th
        >
        <th
          class="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >Population</th
        >
        <th
          class="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >CIOC</th
        >
        <th
          class="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >UN Member Status</th
        >
        <th
          class="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >Currencies</th
        >
        <th
          class="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >Languages</th
        >
      </tr>
    </thead>
    <tbody>
      {#each countries as country}
        <tr class="border-b border-gray-300">
          <td class="py-2 px-3 text-4xl">
            <img src={country.flags.svg} alt="" class="w-14" />
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
            >{country.name.common}</td
          >
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
            >{country.population}</td
          >
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
            >{country.cioc}</td
          >
          <td class="py-2 px-3 text-center">
            <span
              class="rounded px-4 py-2
                {country.unMember
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'}"
            >
              {country.unMember ? "Yes" : "No"}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
            >{country.currencies[Object.keys(country.currencies)[0]].name}</td
          >
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
            >{country.languages[Object.keys(country.languages)[0]]}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  /* your styles go here */
</style>
