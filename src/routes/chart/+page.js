// export const load = async (loadEvent) => {
//   const { fetch } = loadEvent;
//   const uri = "https://restcountries.com/v3.1/all";
//   const res = await fetch(uri);
//   const allCountry = await res.json();

//   // get only first 10 data from an api
//   const firstTenCountry = allCountry.slice(0,9)

//   return {
//       countriesData: firstTenCountry,

//   };
// };