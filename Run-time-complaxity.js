//O(n)
const sumUpToLong = n => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
//O(3) ~O(1)
const sumUpToShort = n => {
  return (n * (n + 1)) / 2;
};

console.log(sumUpToLong(3));
console.log(sumUpToShort(3));
