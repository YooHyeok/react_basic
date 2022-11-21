function User(name) { //생성자 함수
    this.name = name;
    this.isAdmin = false;
    this.info = function(){  
        console.log(`name:${this.name}, isAdmin:${this.isAdmin}`);
    } 
}

let user1 = new User("Hong"); //new 연산자를 통해 객체화한다.
console.log(user1);
console.log(user1.name);
console.log(user1.isAdmin);

let user2 = new User("Song");
console.log(user2.name);
console.log(user2.isAdmin);

let s = '10';
let n1 = Number(s)
let n2 = +s; //숫자로 변경해준다.
console.log(typeof n1);
console.log(typeof n2);

let value1 = '10';
let value2 = '20';
let res = +value1 + +value2;
console.log(res);

// class Person {
//     name = 1;
//     constructor(name) {
//         this.name = name;
//     }
// }
// var p = new Person("아야");
// console.log(p)