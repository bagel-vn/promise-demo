function myPromise(t) {
  return new Promise( r => {
    console.log('Promise ' + t + ' is initialized');
    setTimeout(() => {
      r(t);
    }, t);
  });
}

myPromise(1000).then(result => {
  console.log(result);
});

myPromise(100).then(result => {
  console.log(result);
});
const arr = [myPromise(2000), myPromise(500), myPromise(400)];
(async () => {
  for await (const v of arr) {
    console.log(v);
  }
})();

const arr2 = [myPromise(2000), myPromise(500), myPromise(400)];
(async () => {
  for (const v of arr) {
    let i = await v;
    console.log(i);
  }
})();
