const numbers = [1, 3, 5, 7];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);
const items = [1, 5, 7, 9];
const sumOfItems = items.reduce((a,p) => a + p, 0);
console.log(sumOfItems);