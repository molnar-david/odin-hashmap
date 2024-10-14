import HashMap from "./HashMap.js";

let hashMap = new HashMap();
hashMap.set('hello', 1);
console.log(hashMap);
hashMap.set('byebye', 3);
console.log(hashMap);
hashMap.set('byebyeee', 3);
console.log(hashMap);
hashMap.set('byebyeee', 4);
console.log(hashMap);
hashMap.set('hello', 5);
console.log(hashMap);

console.log(hashMap.get('byebye'));
console.log(hashMap.has('hello'));
console.log(hashMap.remove('byebyeee'));
console.log(hashMap);
