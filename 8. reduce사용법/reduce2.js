// 1차원배열
/*
const tmp = [
  {id: 'prdctCd', value: 'USDKRW'},
  {id: 'realCode', value: 'USDKRW300'}
];

const arr = [1,100,1000];

const object = tmp.reduce((acc, value, index)=>{
  acc[value.id] = value;
  return acc;
}, {})

console.log(object);
*/

// 2차원배열
const array = [[1,2,3],[101,102,103],[1001,1002,1003]];
//array.map(v=>console.log(v));
array.forEach(v=>console.log(v));