import { csvParse } from "d3-dsv";
import type { CsvData } from "../common/CsvData.type";

export const getCsvData = async (url: string):Promise<CsvData> => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/csv; charset=UTF-8" },
  });

  const text = await response.text();
  const parsed = csvParse(text);
  const dataRows: Array<any> = [];

  parsed.forEach((rowValue: any) => {
    const dataRow: Array<any> = [];
    Object.keys(rowValue).forEach((key) => {
      dataRow.push(rowValue[key]);
    })
    if(dataRow.length > 0) {
      dataRows.push(dataRow);
    }
  });

  return { columns: parsed.columns, dataRows: dataRows };
};