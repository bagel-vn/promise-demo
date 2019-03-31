var promise = new Promise(function(resolve, reject) {
  // d a thing, possibly aync, then...

  if ( false/* everything turned out fine */) {
    resolve("Stuff worked!");
  } 
  else {
    reject("It broke");
  }
});


promise.then(function(result){
  console.log(result);
}, function(err){
  console.log(err);
});
