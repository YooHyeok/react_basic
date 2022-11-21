// 객체 내부의 메소드 선언 유형 및 형태
let user = {
      name:'hong' //객체 멤버변수
    , age:30
    , hoi : function() { //메소드 직접 선언
        console.log("Hoi~");
    }
    , hola() { //메소드 직접 선언2
        console.log("hola~");
    }
    , info() {
        let name; //지역변수
        console.log(`name:${this.name}, age:${this.age}`); 
        // 객체에서 메소드와 동일한 레벨에 위치한 멤버변수를 호출할때는 this키워드를 사용. 
        // 사용하지않으면 함수의 지역변수를 호출한다.
    }
}
                         
//동적으로 메소드 추가
user.sayHi = function sayHi() {
    console.log("Hi~");
}

function sayHello() {
    console.log("Hello~");
}
user.sayHi = sayHello //동적으로 메소드 추가
console.log(user);
sayHello();
user.info();
let userc = user;
user=null;
userc.info();