const str="Bharat"
console.log(str.charAt(3))//not support negative indexing
console.log(str.charCodeAt(2))
console.log(str.at(3))//support negative indexing
console.log(str.concat("Dixit"))
console.log(str.includes("Dixit"))
console.log(str.indexOf("h"))
console.log(str.lastIndexOf("h",5))
console.log(str.match(/^Bharat$/))
console.log([...str.matchAll(/^Bharat$/g)])
console.log(str.repeat(3))
let str2 = "Hello Bharat Bharat";
let a = "Bharat";
let t = "World";

console.log(str2.replace(a, t));
console.log(str2.replaceAll(a,t));
console.log(str.slice(2,4))
console.log(str2.split(' '))
console.log(str.substring(2,5))
console.log(str.valueOf())
console.log(str.trim())
console.log(str.localeCompare("at",))