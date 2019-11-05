// function multiply(num1,num2)
// {
//     return (num1*num2);
// }

// let result=multiply(2,3);
// console.log(result);


//ES5-EgmaScript5
// let multiply=function(num1,num2)
// {
//     return (num1*num2);
// }

// let result=multiply(2,3);
// console.log(result);

//ES6
// let multiply=(num1,num2)=>{
//     return(num1*num2);
// }
// //console.log(multiply(2,3));

// let square=(num1)=>{
//     return(num1*num1);
// }
// console.log(square(5));

//arrow function ES6 callback function

// let getDetails=(id,callback)=>{
//     console.log("inside the function");
//     console.log("id:"+id);
//     callback();
// }
// getDetails(1,()=>{
//     console.log("Finished");
// });


// let getDetails = (id, callback) => {
//     console.log("inside the function");
//     console.log("id:" + id);
//     callback({ id: id, name: "unni" });
// }

// getDetails(1, (person) => {
//     console.log("object recieved");
//     console.log(person.id);
//     console.log("finished");
// });



// //Async

// console.log('Before');
// setTimeout(() => { console.log("inside"); }, 2000);
// console.log('After');


/* Find the error */

// function getUser(id) {
//     setTimeout(() => { return ({ id: id, Name: 'Meera' }); }, 2000);

// }

// console.log('Before');
// const user = getUser(1);
// console.log(user);
// console.log('After');


/* solution*/

// function getUser(id,callback)
// {
// setTimeout(()=>{callback({Id:id,Name:"Meera"});},2000);

// }

// console.log("Before");
// getUser(1,(user)=>{
//     console.log(user);
//     console.log("finished");
// });

//oops in js
//console.log("After");
// var person= new Object();
// person.name="unni";
// person.age=21;
// person.getter=function(){

//     return({Name:this.name,age:this.age});
// }
// person.setter=function(name,age){

//     this.name=name;
//     this.age=age;
// }

// console.log(person.getter());
// person.setter("rahul",22);
// console.log(person.getter());



/*constructor*/

// function person(fname,lname)
// {
// this.fname=fname;
// this.lname=lname;
// }
// person.prototype.getDetails=function(){
//     console.log("the name is"+this.fname);
// }

// let per1=new person('muk','lathiyan');
// let per2=new person('hai','poi');

// per1.getDetails();
// per2.getDetails();
// console.log(typeof(person));

/*creating using object.create()*/
// var coder={
//     isStudying:false,
//     printIntroduction:function(){

//         console.log(`My name is ${this.name}.Am I styudying? ${this.isStudying}`);
    
//         }
// }

// var m1=Object.create(coder);
//  m1.name='mukil';
// m1.isStudying=true;
// m1.printIntroduction();

/* CLASS */


// class Vehicle{
// constructor(name,maker,engine){
//     this.name=name;
//     this.engine=engine;
//     this.maker=maker;
// }
// getDetails(){
//     return(`The name of the bike is ${this.name}`);
// }

// }
// let bike1= new Vehicle('hay','suzu','3037');
// console.log(bike1.getDetails());
/* Inheritance */

class Person{
    constructor(){
        this.name="unni";
    }
}
class Student extends Person{
    constructor(id)
    {
        super();
        this.id=id;
    }
    toString(){
        return(`Name of person:${this.name},
        student ID: ${this.id}`);

    }
}

let student1= new Student(22);
console.log(student1.toString());
