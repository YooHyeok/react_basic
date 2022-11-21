/* reverse() 함수 */
let arr1 = [3,5,7,1,2];
arr1.reverse(); //역순 정렬 
console.log(arr1);

/* split() 함수 - 문자열을 특정 문자를 기준으로 split하여 배열로 반환 */
let hobby = "movie,book,health,work";
let hobbys = hobby.split(',');
console.log(hobbys) //[ 'movie', 'book', 'health', 'work' ]

/*  join() 함수  - 배열을 특정 문자를 기준으로 join하여 문자열로 반환 */
let animal = ['monkey','snake','dog','cat']
let animals = animal.join('#');
console.log(animals) //monkey#snake#dog#cat

/* reduce() 함수 - 배열에 있는 모든 값의 누적합을 구한다. */
// let arr1 = [3,5,7,1,2];
let totalArr = arr1.reduce(function(sum, current){ //current는 배열 요소
    return sum+current; // => function의 매개변수 sum에 들어간다.
},0); //0은 매개변수 sum의 초기값 : sum default = 0
console.log(totalArr); //18을 리턴한다.

/* 예제) reduce() 평균 구하기 */
let stud = [
    {no:3, score:80}
  , {no:2, score:75}
  , {no:1, score:90}
]
let cnt = 0; // 덧셈 횟수
let tot = stud.reduce(function(sum, current){
    cnt = cnt+1; //총 3번 더한다. 평균을 내기 위한 횟수
    return (sum+current.score);
},0) 
let avg = tot/cnt
console.log(avg)

//  혹은 배열의 길이로 나누기.
let tot2 = stud.reduce(function(sum,current){
    return (sum+current.score);
},0)/stud.length
console.log(tot2)

/* 배열인지 아닌지 */
let arr = [];
let obj = {};
console.log(typeof arr);
console.log(typeof obj);
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));
