/*
function readLines(filepath){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(filepath+' and ' +Math.random());
    }, 500);
  });
}


filepaths = [1, 2, 3, 4, 5, 6].map( d => 'filepath '+d)
filepaths.map(readLines)


for await (const line of filepaths){
  console.log(line);
}

*/

const arr = [3, 4, 5, 6]; // iterable object

for (const v of arr) { // iterates over the arr
  console.log(v);
}

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


function myPromise(t) {
  return new Promise((r) => {
    console.log('promise '+t+' is inited');
    setTimeout(() => {
      r(t);
    }, t);
  });
}

const arr2 = [myPromise(2000), myPromise(500), myPromise(400)]

(async () =>{

  for await (const v of arr2) {
    console.log(v);
  }

})();

