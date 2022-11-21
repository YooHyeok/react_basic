// let arr = new Array();
let arr = [];
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
arr.push(50);
console.log(arr.length);
console.log(arr);

arr[2] = 100;
console.log(arr);
let v = arr.pop(); //pop : 마지막 데이터를 리턴하고 배열에서 삭제 (push pop 은 stack의 특성)
console.log(v);
console.log(arr);
let s = arr.shift(); //shift : 첫번째 데이터를 리턴하고 배열에서 삭제 (shift는 queue의 특성)
console.log(s);
console.log(arr);

arr.unshift(200);
console.log(arr);
console.log(arr.toString());

let farr = [100, 200, 300, 400, 500];
let tot = 0;
for(let idx in farr) {
    tot += farr[idx];
}
console.log(tot);
tot = 0;

for(let n of farr){
    tot += n;
}
console.log(tot);

farr.splice(2,1,600,700) //2번째부터 1개 제거하고 그자리에 600,700 삽입
console.log(farr);

farr.splice(-1,1) //맨뒤에 1개 제거
console.log(farr);

let narr = [1,2,3,4,5];
let subarr = narr.slice(1,); //index 1부터 index 3까지 가져와라.
narr[5] = 6;
console.log(subarr);
console.log(narr);

/* 배열 결합 ... or concat */
let arr1 = ['A','B','C'];
let arr2 = ['D','E','F'];
let totarr = [...arr1, ...arr2];
console.log(totarr);

let totarr2 = arr.concat(arr2);
console.log(totarr2);

let varr = [11,22,33,44,55];
varr.forEach(function(item, index, array){ //item은 11, 22, 33, 44, 55 총 5개이다. 반복문이도는동안 순차적으로 변경됨.
    console.log(`item:${item}, idx:${index}`);
});

let uarr = [
      {name:"Hong", age:20}
    , {name:"Song", age:30}
    , {name:"Kang", age:40}
    , {name:"Song", age:30}
]
// 배열에서 일치하는 속성의 값을 찾아 해당 Object 혹은 데이터를 반환 중복이면 처음찾고 종료됨
let suser = uarr.find(function(item,idx,arr){
    return item.name=='Song';
})
console.log(suser);
let suser2 = uarr.find(item => item.name=='Song');
console.log(suser2);

// filter는 전체를 다 반환한다. 따라서 리턴타입이 배열이다.
let suserArr = uarr.filter(item => item.name=='Song');
console.log(suserArr);

// 문제 나이가 30이상인 객체를 필터링해라
let sageArr = uarr.filter(item => item.age>=30);
console.log(sageArr)

let iarr = [1,2,3,4,5];
let marr = iarr.map(item=> item*2);
let marr2 = iarr.map(function(item) { //원래 데이터를 가공해서 반환한다.
    return item*2;
});
console.log(marr);
console.log(marr2);

/* map함수를 통해 배열 반환 */
let stud = [
      {no:3, score:80}
    , {no:2, score:75}
    , {no:1, score:90}
]
let studr = stud.map(function(item) {

    return {
             no:item.no
        , score:item.score + 5
    };
});
console.log(studr)
let studr2 = stud.map(item => ({no:item.no, score:item.score+5}));
console.log(studr2)
let mstud = stud.map((item) => ({...item, score:item.score+5})); //...item 즉 item배열을 그대로 나열 이후 이미 score가 함께 나열된 상태에서 score값을 초기화한다.

let mstud2 = stud.map(function(item) {
    console.log(item);
    return {
          ...item
        , score:item.score+5};
}); //item 즉 no를 그대로 나열

console.log(mstud)
console.log(mstud2)

let obj1 = {id:1,title:'11'};
let obj2 = {...obj1, content:'33'}; //
let obj3 = {...obj1};
let obj4 = obj1;
console.log(obj2);

let board = {
    no:1
    ,title:"제목"
    ,content:"내용"
    ,readcount:0
}

let boardcopy = {...board, readcount:board.readcount+1};

/* 배열 정렬 - sort()함수 */
let iarr2 = [5,3,1,8,7];
console.log(iarr2);
iarr2.sort(); //기본적으로 퀵정렬
console.log(iarr2);

iarr2.sort((x,y) => x-y); // 버블정렬 알고리즘 3-5 = -2 음수 (음수나 0 은 NotSwap) 양수면 x값 앞으로 자리이동
console.log("asc",iarr2);
// iarr2.sort((x,y) => y-x); //역방향 버블정렬 알고리즘 3-5 = -2 음수 (음수나 0 은 NotSwap) 양수면 x값 앞으로 자리이동
console.log("desc",iarr2);

//오름차순 비교함수의 정석
function asc_compare(x,y) {
    if(x>y) return 1; //비교해서 X가 크면 양수
    else if(x<y) return -1; // 비교해서 Y가 크면 음수
    else return 0; //같으면 0
}
//내림차순 비교함수의 정석
function desc_compare(x,y) {
    if(x<y) return 1; //비교해서 X가 크면 양수
    else if(x>y) return -1; // 비교해서 Y가 크면 음수
    else return 0; //같으면 0
}

iarr2.sort(asc_compare);
console.log(iarr2)
iarr2.sort(desc_compare);
console.log(iarr2)

stud.sort((s1,s2)=> s1.no-s2.no); //버블정렬 원리다.
console.log(stud)
stud.sort((s1,s2)=> s1.score-s2.score); //버블정렬 원리다.
console.log(stud)

