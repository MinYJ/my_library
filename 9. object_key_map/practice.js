const data = {
  'one': 1,
  'two': 2,
  'three': 3,
};


const setData = v => {
  Object.keys(v).map((k) => {
    console.log(v);
    console.log(k);
    console.log(v[k]);
  });
}

setData(data);