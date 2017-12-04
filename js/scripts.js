var names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']
 var upperNames = names.map(function(upperName) {
   return upperName.toUpperCase();
});
 alert(upperNames);


// var iceCreams = ["chocolate", "vanilla", "green tea", "peanut butter", "mint"];
// iceCreams.forEach(function(iceCreams) {
//   alert("My favorite Ice cream is " + iceCreams + "!!!!!!");
// });



// var numbers = [1,2,3,4,5,6,7,8];
//
// var newNumbers=numbers.map(function(number){
//   return number + 1;
// });
//
//
// alert("The new number is: " + newNumbers);




// var names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']
//
// var uniq = names.map((name) => {
//   return {count: 1, name: name}
// })
// .reduce((a, b) => {
//   a[b.name] = (a[b.name] || 0) + b.count
//   return a
// }, {})
//
// var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)
//
// alert(duplicates);
