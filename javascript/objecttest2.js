// 객체의 속성으로는 변수에 올수 있는 모든 타입이 가능
let person = {
      age : 10 //number
    , name : 'hong' //string
    , married : false //boolean
    , score : [90,80,70] //array
    , parent : { //object
          mother:'park'
        , father:'song'
    }
    , info : function() { //method
        console.log('...');
    }
} //외부에서 필요할때 하나씩 넣어서 사용도 가능하다!

// # Shallow  Copy : 주소 값 을 복사
let u1 = {name:"John"};
let u2 = u1; //reference 참조 주소값을 저장..
// u1.name="Hong";
console.log(u2.name); //John이 출력된다. 

// # deep Copy : 실제 값을 복사
let u3 = {};
for(let key in u1) {
    u3[key] = u1[key];
}
let u4 = {};
Object.assign(u4,u1);
u1.name='Hong' //u1의 값을 hong으로 변경
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);//hong이 아닌 처음 john으로 저장됨.

// assign은 Deep Copy를 할때도 쓰지만, Object끼리 합칠때도 사용한다.
let mobj = {};
Object.assign(mobj,u1,{age:30}); //u1객체와 age가 들어있는 객체의 병합
console.log(mobj);
