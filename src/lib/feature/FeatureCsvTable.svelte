<script lang="ts">
  import { getCsvData } from "../helper/getCsvData";
  import UiCard from "../ui/UiCard.svelte";

  export let url: string = "";
</script>

<div class="csv-table-section">
  <UiCard>
    {#await getCsvData(url)}
      <p>loading ...</p>
    {:then value}
      {#if value && value.columns && value.dataRows}
        <table>
          <thead>
            <tr>
              {#each value.columns as column}
                <th>{column}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each value.dataRows as dataRow}
              <tr>
                {#each dataRow as data}
                  <td>{data}</td>
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
