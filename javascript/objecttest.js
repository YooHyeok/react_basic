let array = []; //배열
let user = {
     name:"hong",
     age : 20,
     "like fruits" : true //속성명에 공백을 추가하려면 "쌍따옴표"로 묶어준다.
}; //객체
console.log(typeof array, typeof object);

console.log(user.name); //속성 접근 형태 1
user.name = "유재혁"; // 객체 속성 값 변경
console.log(user.name); //속성 접근 형태 1
console.log(user["like fruits"]); //속성 접근 형태 2 

// [key]로 접근하여 속성값 변경도 가능
let key = "like fruits";
user[key] = false;
console.log(user);

// 키속성 추가도 가능
let key2 = "like fruits2";
user[key2] = false;
console.log(user);

// 키속성명 동적 변경 가능.
let prop = "gender";
let member = {
    [prop] : "male"
}
console.log(member);

// 빈 object에 속성&값 동시에 추가 가능
let account = {}
account.id='10001';
account.name='hong';
console.log(account);

// user객체의 키속성과 값 삭제
delete user["like fruits2"];
console.log(user);

for(let key in user){
    console.log(`key:${key}, value:${user[key]}`);
}

let arr=[10,20,30];
let sum = 0;
for(let idx in arr) {
    sum += arr[idx];
    console.log(`key:${idx}, value:${arr[idx]}`);
}
console.log(sum);

//배열에 최적화 된 것.
sum = 0;
for(let n of arr) {
    console.log(n);
    sum += n;
}

console.log(sum);

let student = {
    no : 1001,
    name : "hong",
    grade : 2,
    score : 89
};
console.log(student);
let student_str = JSON.stringify(student); //JSON 문자열 형태로 변환됨.
console.log(typeof student)
console.log(typeof student_str) // String으로 변환되었으므로 원래 형태는 '{}'이지만 출력은 {}으로 출력
//key에 "따옴표"가 붙어있다.
console.log(student_str)
console.log(student_str.no) // 문자열 이므로 접근 불가능 

let student_obj = JSON.parse(student_str); //JSON 문자열을 JSON 형태로 다시 변환
console.log(typeof student_obj)
console.log(student_obj)
console.log(student_obj.no)