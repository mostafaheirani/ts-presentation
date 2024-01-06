export const getParsedValue = (v: any): any => {
  try {
    return JSON.parse(v);
  } catch (err) {
    return v;
  }
};
