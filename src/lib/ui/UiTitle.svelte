<script lang="ts">
  import type { TitleStyle } from "../common/TitleStyle.type";

  export let title: string = "";
  export let titleStyle: TitleStyle = "Article";
</script>

{#if titleStyle === "Article"}
  <h1 class="title">{title}</h1>
{:else if titleStyle === "Section"}
  <h2 class="title">{title}</h2>
{:else}
  <h3 class="title">{title}</h3>
{/if}

<style>
  .title {
    font-weight: bold;
  }
  h1 {
    align-self: center;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 4em;
  }
  h2 {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 1.5em;
  }
  h3 {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 1em;
  }
</style>
