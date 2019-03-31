var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.responseText);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}


function getJSON(url) {
  console.log('getJSON is called on', url);
  return get(url).then(JSON.parse);
}


function logGet(url) {
  return getJSON(url) 
    .then(text => {
      console.log(text);
    }).catch(err => {
      console.error('get failed', err);
    })
}

//logGet('http://localhost:8080/story.json')

async function asyncLogGet(url){
  try {
    const response = await getJSON(url);
    console.log(response);
  }
  catch(err){
    console.log('fetch failed', err);
  }
}

//asyncLogGet('http://localhost:8080/story.json')

function wait(ms){
  //return new Promise((resolve, reject) => setTimeout(resolve(), ms));
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function hello() {
  await wait(500);
  return 'world';
}

async function series() {
  await wait(1000);
  await wait(1000);
  return "series done";
}

var start = new Date();

series().then((result)=>{
  var end = new Date();
  console.log(result);
  console.info('Execution time of series: %dms', end - start);
})


async function parallel() {
  const wait1 = wait(1000);
  const wait2 = wait(1000);
  await wait1;
  await wait2;
  return "parallel done";
}

var start = new Date();

parallel().then((result)=>{
  var end = new Date();
  console.log(result);
  console.info('Execution time of parallel: %dms', end - start);
})


async function seriesAndParallel(){
  const result1 = wait series();
  const result2 = wait parallel();

  console.log(result1);
  console.log(result2);
}
