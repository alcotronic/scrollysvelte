import type { MdColor } from "../common/MdColor.type";
import { generateCharColor } from "./generateChartColor";

export const generateCharColors = (
  data: Array<any>,
  color?: MdColor,
  colors?: MdColor[]
) => {
  const resultColors: Array<string> = [];
  const maxNewGeneratedColors = 12;

  data.forEach(() => {
    let colorToUse: MdColor | undefined = color;

    if(colors && colors.length > 0) {
      const randomColorPosition = Math.floor(Math.random() * colors.length);
      colorToUse = colors[randomColorPosition];
    }
    let resultColor = generateCharColor(colorToUse);

    if (resultColors.indexOf(resultColor) != -1 || !resultColor) {
      for (let i = 0; i < maxNewGeneratedColors; i++) {
        resultColor = generateCharColor(colorToUse);
        if(resultColors.indexOf(resultColor) == -1) {
          break;
        }
      }
    }

    resultColors.push(resultColor);
  });
  return resultColors;
};