import { type ChartOptions } from "chart.js";
import { type BarChartData } from "./BarChartData.type";
import { type DoughnutChartData } from "./DoughnutChartData.type";

export type ArticleSection = {
  title?: string;
  content?: Array<
    | ArticleSectionText
    | ArticleSectionQuote
    | ArticleSectionImage
    | ArticleSectionChart
    | ArticleSectionCharts
    | ArticleSectionCsvTable
  >;
};

export type ArticleSectionText = {
  text: string;
};

export type ArticleSectionQuote = {
  author: string;
  quote: string;
};

export type ArticleSectionImage = {
  src?: string;
  data?: string;
  text: string;
  altText: string;
};

export type ArticleSectionChart = {
  title: string;
  chartType: "BarChart" | "DoughnutChart";
  data: BarChartData | DoughnutChartData;
  options?: ChartOptions<"bar"> | ChartOptions<"doughnut">;
};

export type ArticleSectionCharts = {
  charts: Array<ArticleSectionChart>;
};


export type ArticleSectionCsvData = {
  csvUrl: string;
  style: 'Table' | 'BarChart' | 'StackedBarChart';
}