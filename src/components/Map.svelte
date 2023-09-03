<script>
  import { onMount } from "svelte";
  import "ol/ol.css"; // Import OpenLayers CSS
  import Map from "ol/Map";
  import View from "ol/View";
  import TileLayer from "ol/layer/Tile";
  import OSM from "ol/source/OSM";

  let map;

  onMount(() => {
    // Create the map instance
    map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  });
</script>

<div id="map" style="width: 100%; height: 400px;"></div>

<style>
  /* Add custom CSS styles for the map container if needed */
  #map {
    /* Customize map container styles here */
  }
</style>
