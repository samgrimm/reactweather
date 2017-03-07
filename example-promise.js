function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){
      resolve(79);
      reject('City Not Found');
    }, 1000);    
  });
}

getTempPromise('Philly').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
})
