<script>
  import { afterUpdate } from "svelte";

  import Chart from "chart.js/auto";

  export let countries = [];

  export let population = [];
  export let countryName = [];
  $: {
    population = countries?.map((item) => item?.population);
    countryName = countries?.map((item) => item?.name?.common);
    console.log("countryName: ", countryName);
    console.log("population: ", population);
  }

  const data = {
    labels: [
      "Mauritania",
      "Eritrea",
      "Puerto Rico",
      "Romania",
      "Antigua and Barbuda",
      "Cocos (Keeling) Islands",
      "Colombia",
      "Chile",
      "Ghana",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: population,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };

  let ctx;
  let myChart;

  // onMount(async () => {

  //   if (myChart) {
  //     myChart.destroy(); // Destroy the existing chart if it exists
  //   }

  //   myChart = new Chart(ctx, {
  //     type: "polarArea",
  //     data: {
  //       // labels: countryName,
  //       datasets: [
  //         {
  //           label: "Population",
  //           data: population,
  //           backgroundColor: [
  //             "rgb(255, 99, 132)", // Red
  //             "rgb(75, 192, 192)", // Teal
  //             "rgb(255, 205, 86)", // Yellow
  //             "rgb(201, 203, 207)", // Gray
  //             "rgb(54, 162, 235)", // Blue
  //             "rgb(255, 159, 64)", // Orange
  //             "rgb(153, 102, 255)", // Purple
  //             "rgb(255, 77, 77)", // Coral
  //             "rgb(0, 204, 102)", // Green
  //             "rgb(255, 127, 80)", // Salmon
  //           ],
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });
  // });

  afterUpdate(() => {
    if (myChart) {
      myChart.destroy(); // Destroy the existing chart if it exists
    }

    myChart = new Chart(ctx, {
      type: "polarArea",
      data: {
        labels: countryName,
        position: "bottom",
        datasets: [
          {
            label: "Population",
            data: population,
            position: "bottom",
            backgroundColor: [
              "rgb(255, 99, 132)", // Red
              "rgb(75, 192, 192)", // Teal
              "rgb(255, 205, 86)", // Yellow
              "rgb(201, 203, 207)", // Gray
              "rgb(54, 162, 235)", // Blue
              "rgb(255, 159, 64)", // Orange
              "rgb(153, 102, 255)", // Purple
              "rgb(255, 77, 77)", // Coral
              "rgb(0, 204, 102)", // Green
              "rgb(255, 127, 80)", // Salmon
            ],
          },
        ],
      },
      options: {
        legend: {
          position: "bottom",
          labels: {
            padding: 30,
            position: "bottom",
          },
        },
        scales: {
          // y: {
          //   beginAtZero: false,
          // },
          // x: {
          //   name: "",
          // },
        },
      },
    });
  });
</script>

<div class="chart-container w-full max-w-sm h-auto" />
<canvas id="myChart" bind:this={ctx} />

<style>
  /* Style the chart container */
  /* .chart-container {
    width: 100%;
    max-width: 400px; 
    height: auto;
  } */
</style>
