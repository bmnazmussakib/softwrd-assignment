import { writable } from "svelte/store";

export const countryDataStore = writable([]);

const loadData = async () => {
  try {
    const uri = "https://restcountries.com/v3.1/all";
    const res = await fetch(uri);
    const allCountry = await res?.json();
    
    // get only first 10 data from an api
    const firstTenCountry = allCountry.slice(0, 9);
    countryDataStore.set(firstTenCountry)

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

loadData();
