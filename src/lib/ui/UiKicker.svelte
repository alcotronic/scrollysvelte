<script lang="ts">
  export let kicker: string = "";
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<p>{kicker}</p>

<style>
  p {
    align-self: center;
    color: rgb(179, 89, 194);
    padding-top: 0.5em;
  }
</style>
