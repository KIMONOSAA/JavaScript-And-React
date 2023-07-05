// function generatePrimes(quota) {

//     function isPrime(n) {
//       for (let c = 2; c <= Math.sqrt(n); ++c) {
//         if (n % c === 0) {
//             return false;
//          }
//       }
//       return true;
//     }
  
//     const primes = [];
//     const maximum = 1000000;
  
//     while (primes.length < quota) {
//       const candidate = Math.floor(Math.random() * (maximum + 1));
//       if (isPrime(candidate)) {
//         primes.push(candidate);
//       }
//     }
  
//     return primes;
//   }
  
//   document.querySelector('#generate').addEventListener('click', () => {
//     const quota = document.querySelector('#quota').value;
//     const primes = generatePrimes(quota);
//     document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
//   });
  
//   document.querySelector('#reload').addEventListener('click', () => {
//     document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
//     document.location.reload();
//   });
// addEventListener('message',message => {
//     if(message.data.command === 'generate'){
//         generatePrimes(message.data.quota);
//     }
// });

// function generatePrimes(quota){
//     function isPrime(n){
//       for(let c = 2;c<=Math.sqrt(n);++c){
//         if(n % c === 0){
//             return false;
//         }
//       }
//       return true;
//     }
//     const primes = [];
//     const maximum = 1000000;

//     while(primes.length < quota){
//         const candidate = Math.floor(Math.random() * (maximum + 1));
//         if(isPrime(candidate)){
//             primes.push(candidate);
//         }
//     }
//     postMessage(primes.length);
// }

addEventListener('message', message => {
    if (message.data.command === 'generate') {
      generatePrimes(message.data.quota);
    }
  });
  
  function generatePrimes(quota) {
    function linearSieve(n) {
      const primes = [];
      const isComposite = new Uint8Array(n + 1).fill(0);
      for (let i = 2; i <= n; i++) {
        if (!isComposite[i]) {
          primes.push(i);
        }
        for (let j = 0; j < primes.length && i * primes[j] <= n; j++) {
          isComposite[i * primes[j]] = 1;
          if (i % primes[j] === 0) {
            break;
          }
        }
      }
      return primes;
    }
  
    const primes = linearSieve(1000000).slice(0, quota);
    postMessage(primes.length);
  }
  