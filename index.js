<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
  
const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}
  
let resultCall = person.fullName.call(member);
let resultApply = person.fullName.apply(member);
let resultBind = person.fullName.bind(member);

console.log(resultCall);
console.log(resultApply);
console.log(resultBind());



