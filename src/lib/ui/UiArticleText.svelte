<script lang="ts">
  export let text: string = "";
  export let firstParagraph: boolean = false;
</script>

<p class="article-text" class:first-paragraph={firstParagraph}>{text}</p>

<style>
  p.first-paragraph::first-letter {
    font-weight: 500;
    font-size: 320%;
    margin: 5px 0 -5px 0;
    padding: 0 0.1em 0 0;
    height: 0.7em;
    line-height: 0.85em;
    float: left;
  }
  p.article-text {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
</style>
