<script lang="ts">
  export let quote: string = "";
  export let author: string = "";
</script>

<blockquote>
  <p>{quote}</p>
  <em>{author}</em>
</blockquote>

<style>
  blockquote {
    display: flex;
    flex-flow: column;
    padding: 2em;
  }
  p {
    font-style: italic;
  }
  em {
    align-self: flex-end;
  }
</style>
