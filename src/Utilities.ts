export const shufferArrayElem = (arr: string[]) =>
  [...arr].sort(() => Math.random() - 0.5);
