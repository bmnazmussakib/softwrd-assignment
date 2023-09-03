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

<div id="map" class="w-screen h-screen"></div>

<style>

</style>
