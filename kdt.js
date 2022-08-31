// console.log("test");

// export 내보내기 이제 import 해서 쓸 수 있다.
export default function kdt(name, glassese, payment) {
  this.id = name;
  this.glassese = glassese;
  this.payment = payment;  
}

// const members = [];

// for (let i = 0; i < 5; i++) {
//   members.push(new kdt(i+1, "hello", "bye"));
// }

// console.log(members);

// const IronMan = new kdt("Tony Stark", false, "부자");

// console.log(IronMan);