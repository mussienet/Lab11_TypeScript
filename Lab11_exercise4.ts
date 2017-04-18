class Person{

     private _firstname : String;
     private enumerable : Boolean = true;
     private configurable : Boolean = true;


Constractor(_firstname : String){
   this._firstname = _firstname;

}
   get firstname1(){
       return this._firstname;
}
   set firstname1(value : String){
       this._firstname = value.toUpperCase();
}}

var person = new Person();
person.firstname1='hello';
console.log(person.firstname1);