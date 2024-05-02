<script lang="ts">
  import { Doughnut } from "svelte-chartjs";
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from "chart.js";
  import { type DoughnutChartData } from "../common/DoughnutChartData.type";
  import UiCard from "../ui/UiCard.svelte";

  Chart.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

  export let doughnutChartData: DoughnutChartData;
</script>

<div class="doughnut-chart-section">
  <UiCard>
    <div class="doughnut-chart">
      <Doughnut data={doughnutChartData} options={{responsive: true}} />
    </div>
  </UiCard>
</div>

<style>
  .doughnut-chart-section {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .doughnut-chart {
    width: 40vw;
    height: 40vw;
  }
</style>
