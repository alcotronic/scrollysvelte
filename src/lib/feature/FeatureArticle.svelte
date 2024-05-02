<script lang="ts">
  import type { Article } from "../common/Article.type";
  import UiKicker from "../ui/UiKicker.svelte";
  import UiTeaser from "../ui/UiTeaser.svelte";
  import UiTitle from "../ui/UiTitle.svelte";
  import FeatureArticleSection from "./FeatureArticleSection.svelte";
  import { selectedArticle } from "../store/articleStore";

  export let article: Article | undefined = undefined;

  selectedArticle.subscribe((value) => {
    article = value;
  })
</script>

{#if article}
  <article>
    <UiKicker kicker={article.kicker} />
    <UiTitle title={article.title} titleStyle="Article" />
    <UiTeaser teaser={article.teaser} />
    {#if article.sections && article.sections.length > 0}
      {#each article.sections as articleSection}
        <FeatureArticleSection {articleSection} />
      {/each}
    {/if}
  </article>
{/if}

<style>
  article { 
    max-width: 1024px;
    margin: 0 auto;
  }
</style>