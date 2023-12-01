function numberFormat(num) {
  num = num.replace(',','');
  if (num.indexOf('.') != -1) {
    return parseInt(num.split('.')[0]).toLocaleString("ko-KR")+"."+num.split('.')[1];
  } else {
    return parseInt(num).toLocaleString("ko-KR");
  }
}

let number = '1300';
console.log(number);
number = numberFormat('1300.2222');
console.log(number);