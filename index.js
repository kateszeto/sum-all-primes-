function sumPrimes(num) {
  //sieve of eratosthenes algorithm
  var arr = [];
  arr[0] = 0;
  arr[1] = 0;
  for(var i =2;i<=num;i++){
    arr[i] = 1;
  }
  
  var p = 2;
  while(Math.pow(p,2)<=num){
    var j = Math.pow(p,2);
    while(j<=num){
      arr[j] = 0;
      j = j + p;
    }
    p = p + 1;
    while(arr[p]===0){
      p = p+1;
    }
  }
  
  var primesum = 0;
  for(var idx=0;idx<arr.length;idx++){
    if(arr[idx]===1){
      primesum +=idx;
    }
  }
  return primesum;
}

sumPrimes(10);