export default (min, max) => {
  let rndmNum = min + Math.random() * (max + 1 - min);
  rndmNum = Math.floor(rndmNum);
  return rndmNum;
};
