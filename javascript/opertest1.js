let b1 = true || true;
let b2 = true || false;
let b3 = false || true;
let b4 = false || false;

let a=10;
let b=20;

let b5 = (a<10 || ++b>20);
console.log(b); // => b=20을 출력한다.

console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));

let val1 = "";
let val2 = null;
let val3 = "abc";
let res = val1 || val2 || val3; // true인 값을 저장한다.
console.log(res);

//null이 아닐경우 그 값을 활용하는 유효성검증 로직
if(val3 != null) console.log(val3); 
console.log( val3 || null);
//두 코드는 동일한 결과를 나타낸다. 효율적인 유효성 검증이 가능.

// &&일때는 true일때만 값 그대로 반환되고 false면 무조건 0 순서와는 상관없다.
console.log(1 && 0)
console.log(1 && 0 && 3)
console.log(1 && 5)
//&&와 || 연산중에는 &&의 연산순서가 더 높다.