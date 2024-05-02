import type { MdColor } from "../common/MdColor.type";

const purple = [
  '#9C27B0',
  '#F3E5F5',
  '#E1BEE7',
  '#CE93D8',
  '#BA68C8',
  '#AB47BC',
  '#8E24AA',
  '#7B1FA2',
  '#6A1B9A',
  '#4A148C',
  '#EA80FC',
  '#E040FB',
  '#D500F9',
  '#AA00FF',
];

export const generateCharColor = (color?: MdColor) => {
  const randomColorPosition = Math.floor(Math.random() * purple.length);
  return purple[randomColorPosition];
};
