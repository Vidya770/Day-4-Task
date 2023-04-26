//*How to compare two JSON have the same properties without order?
//a. let obj1 = {name: "Person 1", age:5};
//b. let obj2 = { age:5,name:"person 1"};
//Ans
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

let a=JSON.stringify(obj1)===JSON.stringify(obj2);

console.log(a)

//*Use the rest countries API URL-> https://restcountries.com/v3 1/all 
//and display all the country flags in the console.
//Ans:
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
  var data = request.response
  var result = JSON.parse(data);
// for loop
  for(var i = 0; i < result.length; i++) {
        console.log(result[i].flags.png); 
  }
//for of loop =>
//   for(var obj of result){
//         console.log(obj.flags.png); 
  }

  //*Use the same rest countries and print all countries names, regions,
   //sub-region and populations.
   //Ans:
   var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
  var data = request.response
  var result = JSON.parse(data);
//for loop
  for(var i = 0; i < result.length; i++) {
    console.log(result[i].name.common);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);   
  }
// for of loop =>
//    for(var obj of result){
//          console.log(obj.name.common, obj.region, obj.subregion, obj.population); 
//   }
}