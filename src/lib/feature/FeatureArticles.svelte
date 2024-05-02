<script lang="ts">
  import { navigate } from "svelte-routing";
  import type { Article } from "../common/Article.type";
  import { selectedArticle } from "../store/articleStore";
  import UiCard from "../ui/UiCard.svelte";
  import UiKicker from "../ui/UiKicker.svelte";
  import UiTeaser from "../ui/UiTeaser.svelte";
  import UiTitle from "../ui/UiTitle.svelte";
  import UiFadeIn from "../ui/UiFadeIn.svelte";

  export let articles: Array<Article> | undefined = [];

  const onSelectArticle = (article: Article, event?: any) => {
    console.log(event);
    if (event.type === "click" || event.key === "Enter") {
      selectedArticle.set(article);
      navigate("/article");
    }
  };
</script>

<div class="article-grid">
  {#if articles}
    {#each articles as article, index}
      <UiFadeIn>
        <div
          role="link"
          tabindex={index + 1}
          on:click={(event) => onSelectArticle(article, event)}
          on:keypress={(event) => onSelectArticle(article, event)}
        >
          <UiCard>
            <UiKicker kicker={article.kicker} />
            <UiTitle title={article.title} titleStyle="Overview" />
            <UiTeaser teaser={article.teaser} />
          </UiCard>
        </div>
      </UiFadeIn>
    {/each}
  {/if}
</div>

<style>
  .article-grid {
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: 80vw;
    column-gap: 5vw;
    row-gap: 5vw;
  }
  @media only screen and (min-width: 786px) {
    .article-grid {
      grid-template-columns: 45vw 45vw;
    }
  }
</style>
