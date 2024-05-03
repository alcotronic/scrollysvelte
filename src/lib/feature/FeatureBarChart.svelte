<script lang="ts">
  import { Bar } from "svelte-chartjs";
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  import type { BarChartData } from "../common/BarChartData.type";
  import UiCard from "../ui/UiCard.svelte";

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );

  export let barChartData: BarChartData;

  const options = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  };
</script>

<div class="bar-chart-section">
  <UiCard>
    <div class="bar-chart">
      <Bar data={barChartData} options={options} />
    </div>
  </UiCard>
</div>

<style>
  .bar-chart-section {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .bar-chart {
    width: 60vw;
    height: 30vw;
  }
</style>
