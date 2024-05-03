<script lang="ts">
  import type { CsvData } from "../common/CsvData.type";
  import { generateCharColor } from "../helper/generateChartColor";
  import { getCsvData } from "../helper/getCsvData";
  import UiCard from "../ui/UiCard.svelte";

  export let url: string = "";

  const colors: Array<string> = [];

  const getDataAndGenerateColors = async (): Promise<CsvData> => {
    const csvTable = await getCsvData(url);
    csvTable.columns.forEach(() => {
      colors.push(generateCharColor());
    });
    return csvTable;
  }
</script>

<div class="csv-table-section">
  <UiCard>
    {#await getDataAndGenerateColors()}
      <p>loading ...</p>
    {:then value}
      {#if value && value.columns && value.dataRows}
        <table>
          <thead>
            <tr>
              {#each value.columns as column, columnIndex}
                <th style:color={colors[columnIndex]}>{column}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each value.dataRows as dataRow}
              <tr>
                {#each dataRow as data, dataIndex}
                  <td style:color={colors[dataIndex]}>{data}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    {/await}
  </UiCard>
</div>

<style>
  .csv-table-section {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
