const msToMm = {};

const convertMsToMm = ms => {
  const min = Math.floor(ms / 60000);
  const sec = ((ms % 60000) / 10000).toFixed(0);
  return `${min}:${sec}`;
};

msToMm.install = Vue => {
  Vue.filter("ms-to-mm", val => {
    return convertMsToMm(val);
  });
};

export default msToMm;
