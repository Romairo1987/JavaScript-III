/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: "This" refers to the global window.
* 2. Implicit Binding: "This" refers to whatever keys and thier values on the object.
* 3. New Binding: "This" refers to whatever assigned to the New keyword.
* 4. Explicit Binding: "This" refers when call or apply is used.
*
* write out a code example of each explanation above
*/const ObjectA={
    firstname:"Ramy",
    lastname:"Metry",
    sayhello:function(){
        console.log(this);
    }
}

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
console.log(ObjectA.sayhello());
// code example for Implicit Binding

// Principle 3
function Name(Object){
    this.name=Object.name;
    this.age=Object.age;
    this.hello=function(){
        console.log(`hello here is my info` , this);
    }
}
const Samer= new Name({name:'samer', age:30});
const Michael = new Name({name:'Michael' , age:35});
Samer.hello();
// code example for New Binding

// Principle 4
Samer.hello.call(Michael);
Michael.hello.apply(Samer);
// code example for Explicit Binding