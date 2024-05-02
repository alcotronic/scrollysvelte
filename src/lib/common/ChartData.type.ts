import { type BarChartData } from "./BarChartData.type"
import { type DoughnutChartData } from "./DoughnutChartData.type"

export type ChartData = {
  title: string,
  chartType: 'BarChart' | 'DounutChart',
  data: BarChartData | DoughnutChartData,
}