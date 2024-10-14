import LinkedList from "./LinkedList.js";

export default class HashMap {
    #buckets = new Array(16).fill().map((x) => new LinkedList());
    #loadFactor = 0.8;

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.#buckets.length;
        }
        return hashCode;
    }

    set(key, value) {
        console.log(this.hash(key));
        let bucket = this.#buckets[this.hash(key)];
        let node = bucket.head;
        while (node) {
            if (node.value.key === key) {
                node.value.value = value;
                return;
            }
            node = node.nextNode;
        }
        bucket.append({ key, value });
    }
}
