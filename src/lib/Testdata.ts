import type { Article } from './common/Article.type';
import { MdColorEnum } from './common/MdColor.enum';
import { useGenerateCharColors } from './helper/generateChartColors';


const testBarData1 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      label: 'testBarDataSet1 Label',
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90]),
    },
  ],
};

const testBarData2 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      label: 'testBarDataSet1 Label',
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90], MdColorEnum.blue),
    },
  ],
};

const testBarData3 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      label: 'testBarDataSet1 Label',
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90], undefined, [MdColorEnum.pink, MdColorEnum.purple, MdColorEnum.deepPurple]),
    },
  ],
};

const testData1 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90]),
    },
  ],
};

const testData2 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90], MdColorEnum.blue),
    },
  ],
};

const testData3 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90], undefined, [MdColorEnum.pink, MdColorEnum.purple, MdColorEnum.deepPurple]),
    },
  ],
};


const createArticle = (id: number): Article => {
  return {
    id: id,
    kicker: 'Kicker Test Kicker',
    title: 'Test Artikel ' + id,
    teaser: 'Test Teaser Text for testing the teaser text of an article.',
    sections: [
      {
        title: 'Test Section 1',
        content: [
          {
            text: 'Test Sextion 1 text 1 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
          },
          {
            author: 'Author Name1',
            quote: 'Test Sextion 1 quote 1 for testing the quote content of an article section. Test Sextion 1 quote for testing the quote content of an article section.'
          },
          {
            text: 'Test Sextion 1 text 2 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
          },
          {
            title: 'Test Bar Chart 1',
            chartType: 'BarChart',
            data: testBarData1
          },
          {
            text: 'Test Sextion 1 text 3 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
          }
        ]
      },
      {
        title: 'Test Section 2',
        content: [
          {
            text: 'Test Sextion 2 text 1 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
          },
          {
            title: 'Test Dounut Chart 1',
            chartType: 'DoughnutChart',
            data: testData1
          },
          {
            author: 'Author Name2',
            quote: 'Test Sextion 2 quote 1 for testing the quote content of an article section. Test Sextion 1 quote for testing the quote content of an article section.'
          },
          {
            title: 'Test Dounut Chart 2',
            chartType: 'DoughnutChart',
            data: testData2
          },
          {
            text: 'Test Sextion 2 text 2 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
          },
          {
            csvUrl: window.location.origin + "/public/Testtabelle2.csv"
          },
          {
            author: 'Author Name2',
            quote: 'Test Sextion 2 quote 1 for testing the quote content of an article section. Test Sextion 1 quote for testing the quote content of an article section.'
          },
          {
            title: 'Test Dounut Chart 3',
            chartType: 'DoughnutChart',
            data: testData3
          },
          {
            text: 'Test Sextion 2 text 2 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
          },
        ]
      }
    ]
  }
}

export const articles = [createArticle(1), createArticle(2), createArticle(3), createArticle(4), createArticle(5)];