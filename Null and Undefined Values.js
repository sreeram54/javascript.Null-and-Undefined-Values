var result;

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false


var a;        
console.log(a);  //undefined  
console.log(typeof(a));  //undefined  
console.log(undeclaredVar);  //Uncaught ReferenceError: undeclaredVar is not defined  