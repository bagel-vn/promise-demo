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
  /*
getJSON('http://localhost:8080/story.json').then(function(story){
  return getJSON(story.chapterUrls[0]);
}).then(function(chapter1) {
  console.log("Got chapter 1!", chapter1);
})
*/

var storyPromise;

function getChapter(i) {
  storyPromise = storyPromise || getJSON('http://localhost:8080/story.json');

  return storyPromise.then(function(story) {
    return getJSON(story.chapterUrls[i]);
  });
}

getChapter(0).then(function(chapter){
  console.log(chapter);
  return getChapter(1);
}).then(function(chapter){
  console.log(chapter)
})

