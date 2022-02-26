
const IS_ENABLED = false;

export const mt = (a) => {
  if(IS_ENABLED && location.hostname === "localhost") {
    return '▮▮▮▮▮▮▮▮▮▮';
  }
  return a;
}