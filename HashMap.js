import LinkedList from "./LinkedList.js";

export default class HashMap {
    #capacity = 16;
    #load = 0;
    #buckets = new Array(this.#capacity).fill().map((x) => new LinkedList());
    #loadFactor = 0.8;

    get length() {
        return this.#load;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.#capacity;
        }
        return hashCode;
    }

    set(key, value) {
        // Capacity may need to be increased when setting
        let bucket = this.#buckets[this.hash(key)];
        let node = bucket.head;
        while (node) {
            if (node.value.key === key) {
                node.value.value = value;
                this.#load++;
                return;
            }
            node = node.nextNode;
        }
        bucket.append({ key, value });
        this.#load++;
    }

    get(key) {
        let bucket = this.#buckets[this.hash(key)];
        let node = bucket.head;
        while (node) {
            if (node.value.key === key) {
                return node.value.value;
            }
            node = node.nextNode;
        }
        return node;
    }

    has(key) {
        let bucket = this.#buckets[this.hash(key)];
        let node = bucket.head;
        while (node) {
            if (node.value.key === key) {
                return true;
            }
            node = node.nextNode;
        }
        return false;
    }

    remove(key) {
        let bucket = this.#buckets[this.hash(key)];
        let node = bucket.head;
        let index = 0;
        while (node) {
            if (node.value.key === key) {
                bucket.removeAt(index);
                this.#load--;
                return true;
            }
            node = node.nextNode;
            index++;
        }
        return false;
    }
}
