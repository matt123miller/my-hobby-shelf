import { PaintData } from '../types';

function AlphabeticalAsc(data: PaintData): PaintData {
  return data.sort((a, b) => (a.name > b.name ? -1 : 1));
}
function AlphabeticalDesc(data: PaintData): PaintData {
  return data.sort((a, b) => (a.name < b.name ? 1 : -1));
}
function DarkToLight(data: PaintData): PaintData {
  return data.sort((a, b) => (a.hexCode > b.hexCode ? -1 : 1));
}
function LightToDark(data: PaintData): PaintData {
  return data.sort((a, b) => (a.hexCode < b.hexCode ? 1 : -1));
}

export default {
  AlphabeticalAsc,
  AlphabeticalDesc,
  DarkToLight,
  LightToDark,
};
