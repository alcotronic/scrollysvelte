import { csvParse } from "d3-dsv";
import type { CsvTable } from "../common/CsvTable.type";

export const getCsvData = async (url: string):Promise<CsvTable> => {
  console.log(window.location);
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/csv; charset=UTF-8" },
  });

  const text = await response.text();
  const parsed = csvParse(text);
  const data: Array<any> = [];

  parsed.forEach((rowValue: any) => {
    const dataRow: Array<any> = [];
    Object.keys(rowValue).forEach((key) => {
      dataRow.push(rowValue[key]);
    })
    if(dataRow.length > 0) {
      data.push(dataRow);
    }
  });

  return { columns: parsed.columns, dataRows: data };
};