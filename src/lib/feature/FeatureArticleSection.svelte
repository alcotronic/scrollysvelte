<script lang="ts">
  import type {
    ArticleSection,
    ArticleSectionChart,
    ArticleSectionCsvData,
    ArticleSectionQuote,
    ArticleSectionText,
  } from "../common/ArticleSection.type";
  import type { BarChartData } from "../common/BarChartData.type";
  import type { DoughnutChartData } from "../common/DoughnutChartData.type";
  import { convertCsvDataToCharBarData } from "../helper/converCsvTableToCharData";
  import { getCsvData } from "../helper/getCsvData";
  import UiArticleQuote from "../ui/UiArticleQuote.svelte";
  import UiArticleText from "../ui/UiArticleText.svelte";
  import UiFadeIn from "../ui/UiFadeIn.svelte";
  import UiTitle from "../ui/UiTitle.svelte";
  import FeatureBarChart from "./FeatureBarChart.svelte";
  import FeatureCsvTable from "./FeatureCsvTable.svelte";
  import FeatureDoughnutChart from "./FeatureDoughnutChart.svelte";

  export let articleSection: ArticleSection;

  const isSectionText = (content: any): content is ArticleSectionText => {
    return !!content.text;
  };
  const isSectionQuote = (content: any): content is ArticleSectionQuote => {
    return !!content.author && !!content.quote;
  };
  const isSectionBarChart = (content: any): content is ArticleSectionChart => {
    return (
      !!content.chartType && content.chartType === "BarChart" && !!content.data
    );
  };
  const isSectionDoughnutChart = (
    content: any
  ): content is ArticleSectionChart => {
    return (
      !!content.chartType &&
      content.chartType === "DoughnutChart" &&
      !!content.data
    );
  };
  const isSectionCsvTable = (
    content: any
  ): content is ArticleSectionCsvData => {
    return content.csvUrl;
  };
  const getBarChartData = (content: ArticleSectionChart) => {
    return content.data as BarChartData;
  };
  const getDoughnutChartData = (content: ArticleSectionChart) => {
    return content.data as DoughnutChartData;
  };

  const loadCsvDataAsBarChartData = async (csvUrl: string) => {
    const csvData = await getCsvData(csvUrl);
    return convertCsvDataToCharBarData(csvData, ["Auto", "Fahrrad"]);
  };
</script>

<UiFadeIn>
  <section>
    {#if articleSection.title}
      <UiTitle title={articleSection.title} titleStyle="Section" />
      {#if articleSection.content}
        {#each articleSection.content as content}
          <p>
            {#if isSectionText(content)}
              <UiFadeIn>
                <UiArticleText text={content.text} />
              </UiFadeIn>
            {/if}
            {#if isSectionQuote(content)}
              <UiFadeIn>
                <UiArticleQuote quote={content.quote} author={content.author} />
              </UiFadeIn>
            {/if}
            {#if isSectionBarChart(content)}
              <UiFadeIn>
                <FeatureBarChart barChartData={getBarChartData(content)} />
              </UiFadeIn>
            {/if}
            {#if isSectionDoughnutChart(content)}
              <UiFadeIn>
                <FeatureDoughnutChart
                  doughnutChartData={getDoughnutChartData(content)}
                />
              </UiFadeIn>
            {/if}
            {#if isSectionCsvTable(content)}
              <UiFadeIn>
                <FeatureCsvTable url={content.csvUrl} />
                {#await loadCsvDataAsBarChartData(content.csvUrl) then barCharData}
                  <FeatureBarChart barChartData={barCharData} />
                {/await}
              </UiFadeIn>
            {/if}
          </p>
        {/each}
      {/if}
    {/if}
  </section>
</UiFadeIn>
