<script lang="ts">
  import type { TitleStyle } from "./lib/common/TitleStyle.type";
  import UiTitle from "./lib/ui/UiTitle.svelte";
  import UiKicker from "./lib/ui/UiKicker.svelte";
  import UiTeaser from "./lib/ui/UiTeaser.svelte";
  import UiCard from "./lib/ui/UiCard.svelte";
  import { articles } from "./lib/Testdata";
  import UiActionBar from "./lib/ui/UiActionBar.svelte";

  import { Router, Link, Route } from "svelte-routing";
  import Articles from "./routes/Articles.svelte";
  import About from "./routes/About.svelte";

  const pageTitle = "Scrollysvelte"

  const kicker = "Test kicker";
  const title = "Test title";
  const teaser = "Test teaser";

  const titleStyle: TitleStyle = "Article";

  const article = articles[0];

  export let url = "";
</script>


  <main>
    
    <Router {url}>
      <div class="header">
        <UiActionBar><h1 slot="center"><Link tabindex="0" to="/">{pageTitle}</Link></h1></UiActionBar>
      </div>
      <div>
        <Route path="/article" component={About} />
        <Route path="/" component={Articles} />
      </div>
    </Router>
    
  </main>


<!-- <main>
  <div class="header">
    <UiActionBar><h1 slot="center">{pageTitle}</h1></UiActionBar>
  </div>
  <div class="content">
    <UiCard>
      <UiKicker {kicker}/>
      <UiTitle {title} {titleStyle}/>
      <UiTeaser {teaser}/>
    </UiCard>
    <FeatureArticle article={article}/>
  </div>
  <div class="footer"></div>  
</main> -->

<style>
  .header {
    width: 100vw;
  }
  .content {
    max-width: 90vw;
    margin: 0 auto;
    padding: 2rem;
  }
</style>