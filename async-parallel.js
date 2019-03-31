
function wait(t) {
  return new Promise(r => {
    console.log('wait promise ' + t + ' is initialized');
    setTimeout(() => {
      r(t)
    }, t);
  });
}


const arr = [1,2,3,4,5,6,7,8,9].map(r => r*100);

/* series */
/*
(async () => {
  for (const v of arr) {
    const response = await wait(v);
    console.log(response);
  }
})();
*/
/* parallel */
/*
(async () => {
  const waitPromises = arr.map(wait);
  for (const waitPromise of waitPromises) {
    console.log(await waitPromise);
  }
})();
*/

/* for await of */
(async () => {
  const waitPromises = arr.map(wait);
  for await(const resolvedValue of waitPromises){
    console.log(resolvedValue);
  }
})();

