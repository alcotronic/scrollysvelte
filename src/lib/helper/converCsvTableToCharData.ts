import type { BarChartData } from "../common/BarChartData.type";
import type { BarChartDataset } from "../common/BarChartDataset.type";
import type { CsvData } from "../common/CsvData.type";
import { generateCharColor } from "./generateChartColor";

export const convertCsvDataToCharBarData = (csvData: CsvData, dataLabels?: string[]): BarChartData => {

  const labels: Array<any> = csvData.columns;
  const datasets: BarChartDataset[] = [];

  csvData.dataRows.forEach((dataRow, index) => {
    datasets.push({
      label: dataLabels?.[index] ?? '',
      data: dataRow,
      backgroundColor: [generateCharColor()]
    })
  })

  return {labels: labels, datasets: datasets};
}