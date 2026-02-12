import React from 'react'

async function PrimeRange({params} :{params : Promise<{start : string , end : string}>}) {
 const { start, end } = await params;

  const s = parseInt(start);
  const e = parseInt(end);

  function isPrime(n: number) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  const primes: number[] = [];

  for (let i = s; i <= e; i++) {
    if (isPrime(i)) primes.push(i);
  }

  return (
    <div>
      <h2>Prime Numbers between {s} and {e}</h2>
      <p>{primes.join(", ")}</p>
    </div>
  );
}

export default PrimeRange