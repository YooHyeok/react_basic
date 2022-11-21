function func1() {
    console.log("func1입니다.");
}

let func2 = function(x,y) { //함수 표현식 (익명함수) 익명함수를 변수에 담은것.
// submit.onclick = function(){}
    return x+y;
}
let func3 = (x,y) => {return x+y;} //중괄호 쓰면 return생략불가능.
let func4 = (x,y) => x+y; //명령어가 하나일경우 중괄호 생략 가능

func1();
console.log(func2(1,2));
console.log(func3(1,2));
console.log(func4(1,2));

// 콜백 함수도 화살표함수로 표현 가능
function func5(func){
    func();
}
func5(function(){
    console.log("Hi!");
});

func5(()=>{console.log("Hi!")})

let func6 = name => {console.log(name);} //매개변수 (name) 하나면 (괄호)생략가능
func6("james");

let func7 = () => {console.log("매개변수가 없어도 괄호는 생략불가")}
func7()