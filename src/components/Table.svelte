<script>
  // your script goes here
  export let data;
  const countryData = data.countriesData;
  console.log(data.countriesData);
</script>

<!-- <table>
  <thead>
    <tr>
      <td>Flag</td>
      <td>Name</td>
      <td>Population</td>
      <td>CIOC</td>
      <td>UN Member Status</td>
      <td>Currencies</td>
      <td>Languages</td>
    </tr>
  </thead>
  <tbody>
    {#each countryData as country}
      <tr>
        <td>{country.flag}</td>
        <td>{country.name.common}</td>
        <td>{country.population}</td>
        <td>{country.cioc}</td>
        <td>{country.unMember ? 'Yes' : 'No'}</td>
        <td>{country.currencies[Object.keys(country.currencies)[0]].name}</td>
        <td>{country.languages[Object.keys(country.languages)[0]]}</td>
      </tr>
    {/each}
  </tbody>
</table> -->

<table class="min-w-full border-collapse rounded">
    <thead>
      <tr class="bg-gray-200">
        <th class="py-2 px-3 text-left">Flag</th>
        <th class="py-2 px-3 text-left">Name</th>
        <th class="py-2 px-3 text-left">Population</th>
        <th class="py-2 px-3 text-left">CIOC</th>
        <th class="py-2 px-3 text-center">UN Member Status</th>
        <th class="py-2 px-3 text-left">Currencies</th>
        <th class="py-2 px-3 text-left">Languages</th>
      </tr>
    </thead>
    <tbody>
      {#each countryData as country}
        <tr class="border-b border-gray-300">
          <td class="py-2 px-3 text-4xl">{country.flag}</td>
          <td class="py-2 px-3">{country.name.common}</td>
          <td class="py-2 px-3">{country.population}</td>
          <td class="py-2 px-3">{country.cioc}</td>
          <td class="py-2 px-3 text-center">
            <span class="rounded px-4 py-2
              {country.unMember ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}">
              {country.unMember ? 'Yes' : 'No'}
            </span>
          </td>
          <td class="py-2 px-3">{country.currencies[Object.keys(country.currencies)[0]].name}</td>
          <td class="py-2 px-3">{country.languages[Object.keys(country.languages)[0]]}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  

<style>
  /* your styles go here */
</style>
