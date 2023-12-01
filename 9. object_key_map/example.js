const arr = [
  {id: 'symb', label:'종목코드', value:'USDKRW'},
  {id: 'fINCL_Yn', label:'재정통화여부', value:'Y'}
]


const arrayToObject = (arr, extract, prop) => {
  return arr.reduce((acc, v, index) => {
    if(prop) acc[v[extract][prop]] = v;
    else acc[v[extract]] = v;

    return acc;
  }, {});
}

console.log(arrayToObject(arr, `id`));