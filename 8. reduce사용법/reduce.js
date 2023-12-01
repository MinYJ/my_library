// 배열의 모든 수 합치기
let arr = [1,2,3,4,5];

// for, for of, forEach

let result = 0;
for(const num of arr) {
  result = result + num;
}

console.log(result);