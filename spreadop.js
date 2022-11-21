/* 배열의 값을 분할하여 저장 */
let arr = [1,2,3,4,5];
let [v1,v2,v3,...other] = arr;
console.log(v1);
console.log(v2);
console.log(v3);
console.log(other);

/* 객체의 값을 분할하여 저장 */
let obj = {k1:"aa", k2:"bb", k3:"cc"};
let {k1,k2,k3} = obj; // 저장할 객체의 각 키속성명과 저장될 객체의 속성명이 일치해야만한다.
console.log(k1);
console.log(k2);
console.log(k3); // 결과적으로 복수개의 변수를 묶어서 한번에 저장하는것.