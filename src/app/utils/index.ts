export const deepCopy = (val) => {
  return val ? JSON.parse(JSON.stringify(val)) : val;
}
