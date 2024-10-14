import HashMap from "./HashMap.js";

// let hashMap = new HashMap();
// hashMap.set('hello', 1);
// console.log(hashMap);
// hashMap.set('byebye', 3);
// console.log(hashMap);
// hashMap.set('byebyeee', 3);
// console.log(hashMap);
// hashMap.set('byebyeee', 4);
// console.log(hashMap);
// hashMap.set('hello', 5);
// console.log(hashMap);
// console.log(hashMap.entries());
// console.log(hashMap.keys());
// console.log(hashMap.values());
// hashMap.set('hell', 6);
// console.log(hashMap);
// hashMap.set('hel', 7);
// console.log(hashMap);
// hashMap.set('he', 8);
// console.log(hashMap);
// hashMap.set('h', 9);
// console.log(hashMap);
// hashMap.set('helloh', 10);
// console.log(hashMap);
// hashMap.set('hellohe', 11);
// console.log(hashMap);
// hashMap.set('hellohel', 12);
// console.log(hashMap);
// hashMap.set('hellohell', 13);
// console.log(hashMap);
// hashMap.set('hellohello', 14);
// console.log(hashMap);
// hashMap.set('hellohelloh', 15);
// console.log(hashMap);
// hashMap.set('hellohellohe', 16);
// console.log(hashMap);

// console.log(hashMap.get('byebye'));
// console.log(hashMap.has('hello'));
// console.log(hashMap.remove('byebyeee'));
// console.log(hashMap);
// console.log(hashMap.entries());
// console.log(hashMap.keys());
// console.log(hashMap.values());
// console.log(hashMap.length);

// // hashMap.clear();
// console.log(hashMap);

const test = new HashMap(); // or HashMap() if using a factory
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('carrot', 'purple');
test.set('dog', 'brown');
test.set('apple', 'green');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('frog', 'brown');
test.set('lion', 'golden');
test.set('moon', 'silver')
test.set('moon', 'cheese')
test.set('banana', 'green');
test.set('elephant', 'pink');
console.log(test.get('moon'));
console.log(test.has('banana'));
console.log(test.remove('jacket'));
console.log(test);
console.log(test.entries());
console.log(test.keys());
console.log(test.values());
console.log(test.length());