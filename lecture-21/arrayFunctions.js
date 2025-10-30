console.log("========= ARRAY CREATION =========");
let arr = new Array(1, 2, 3);
let arr2 = [4, 5, 6];
console.log("new Array():", arr);
console.log("[]:", arr2);

console.log("========= at() =========");
console.log(arr.at(1));   // 2
console.log(arr.at(-1));  // 3

console.log("========= concat() =========");
console.log(arr.concat(arr2)); // [1,2,3,4,5,6]

console.log("========= constructor =========");
console.log(arr.constructor === Array); // true

console.log("========= copyWithin() =========");
let fruits = ["apple", "banana", "cherry", "mango"];
console.log(fruits.copyWithin(1, 2)); // ["apple","cherry","mango","mango"]

console.log("========= entries() =========");
for (let [i, val] of arr.entries()) console.log(i, val);

console.log("========= every() =========");
console.log(arr.every(x => x > 0)); // true

console.log("========= fill() =========");
let a = [1, 2, 3, 4];
console.log(a.fill(0, 1, 3)); // [1,0,0,4]

console.log("========= filter() =========");
console.log(a.filter(x => x > 1)); // [4]

console.log("========= find() =========");
console.log(arr.find(x => x > 2)); // 3

console.log("========= findIndex() =========");
console.log(arr.findIndex(x => x === 2)); // 1

console.log("========= findLast() & findLastIndex() =========");
let nums = [10, 20, 30, 20];
console.log(nums.findLast(x => x === 20)); // 20
console.log(nums.findLastIndex(x => x === 20)); // 3

console.log("========= flat() =========");
let nested = [1, [2, [3]]];
console.log(nested.flat(2)); // [1,2,3]

console.log("========= flatMap() =========");
console.log(arr.flatMap(x => [x, x * 2])); // [1,2,2,4,3,6]

console.log("========= forEach() =========");
arr.forEach(x => console.log("Value:", x));

console.log("========= from() =========");
console.log(Array.from("Bharat")); // ['B','h','a','r','a','t']

console.log("========= includes() =========");
console.log(arr.includes(2)); // true

console.log("========= indexOf() =========");
console.log(arr.indexOf(3)); // 2

console.log("========= isArray() =========");
console.log(Array.isArray(arr)); // true

console.log("========= join() =========");
console.log(arr.join("-")); // "1-2-3"

console.log("========= keys() =========");
for (let k of arr.keys()) console.log(k);

console.log("========= lastIndexOf() =========");
console.log(nums.lastIndexOf(20)); // 3

console.log("========= length =========");
console.log(arr.length); // 3
arr.length = 2;
console.log(arr); // [1,2]
arr.length = 3;
arr[2] = 3; // restore

console.log("========= map() =========");
console.log(arr.map(x => x * 10)); // [10,20,30]

console.log("========= of() =========");
console.log(Array.of(7, 8, 9)); // [7,8,9]

console.log("========= pop() =========");
let p = [1, 2, 3];
p.pop();
console.log(p); // [1,2]

console.log("========= prototype (custom) =========");
Array.prototype.first = function() { return this[0]; };
console.log(arr.first()); // 1

console.log("========= push() =========");
p.push(4);
console.log(p); // [1,2,4]

console.log("========= reduce() =========");
console.log(arr.reduce((a, b) => a + b, 0)); // 6

console.log("========= reduceRight() =========");
console.log(["a", "b", "c"].reduceRight((a, b) => a + b)); // "cba"

console.log("========= reverse() =========");
let r = [1, 2, 3];
r.reverse();
console.log(r); // [3,2,1]

console.log("========= shift() =========");
let sft = [9, 8, 7];
sft.shift();
console.log(sft); // [8,7]

console.log("========= slice() =========");
console.log(arr.slice(1, 3)); // [2,3]

console.log("========= some() =========");
console.log(arr.some(x => x > 2)); // true

console.log("========= sort() =========");
let sortArr = [3, 1, 2];
sortArr.sort();
console.log(sortArr); // [1,2,3]

console.log("========= splice() =========");
let sp = [1, 2, 3];
sp.splice(1, 1, 9);
console.log(sp); // [1,9,3]

console.log("========= toReversed() =========");
let tR = [1, 2, 3];
console.log(tR.toReversed()); // [3,2,1]

console.log("========= toSorted() =========");
let tS = [3, 1, 2];
console.log(tS.toSorted()); // [1,2,3]

console.log("========= toSpliced() =========");
let tSp = [1, 2, 3, 4];
console.log(tSp.toSpliced(1, 2, 9)); // [1,9,4]

console.log("========= toString() =========");
console.log(arr.toString()); // "1,2,3"

console.log("========= unshift() =========");
let u = [2, 3];
u.unshift(1);
console.log(u); // [1,2,3]

console.log("========= valueOf() =========");
console.log(arr.valueOf()); // [1,2,3]

console.log("========= with() =========");
let w = [10, 20, 30];
console.log(w.with(1, 99)); // [10,99,30]

console.log("========= 🎯 END OF DEMO =========");
