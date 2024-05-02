<script lang="ts">
  import UiActionBar from "./lib/ui/UiActionBar.svelte";

  import { Router, Link, Route } from "svelte-routing";
  import Articles from "./routes/Articles.svelte";
  import About from "./routes/About.svelte";

  const pageTitle = "Scrollysvelte"

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