async function* range(start, stop){
  for (let i = start; i <= stop; i++){
    yield i;
  }
}

async function* onetwothree(){
  yield 1;
  yield 2;
  yield 3;
}

const arr = range(4, 8);
console.log(arr); // Object [AsyncGenerator] {}

const arr2 = onetwothree();

(async () => {
  console.log(await arr.next());
  console.log(await arr.next());
  console.log(await arr.next());
  console.log(await arr.next());
  console.log(await arr.next());
  console.log(await arr.next());
  console.log(await arr.next());

  console.log(await arr2.next());
  console.log(await arr2.next());
  console.log(await arr2.next());
  console.log(await arr2.next());
})();
