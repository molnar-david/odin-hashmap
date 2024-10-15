import LinkedList from "./LinkedList.js";

export default class HashSet {
    #capacity = 16;
    #load = 0;
    #buckets = new Array(this.#capacity).fill().map((x) => new LinkedList());
    #loadFactor = 0.75;

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.#capacity;
        }
        return hashCode;
    }

    set(key) {
        // Increase capacity if needed
        if (this.#load / this.#capacity >= this.#loadFactor) this.resize();
        const bucket = this.#buckets[this.hash(key)];
        let node = bucket.head;
        while (node) {
            if (node.value === key) {
                return;
            }
            node = node.nextNode;
        }
        bucket.append(key);
        this.#load++;
    }

    get(key) {
        const bucket = this.#buckets[this.hash(key)];
        let node = bucket.head;
        while (node) {
            if (node.value === key) {
                return node.value;
            }
            node = node.nextNode;
        }
        return node;
    }

    has(key) {
        const bucket = this.#buckets[this.hash(key)];
        let node = bucket.head;
        while (node) {
            if (node.value === key) {
                return true;
            }
            node = node.nextNode;
        }
        return false;
    }

    remove(key) {
        const bucket = this.#buckets[this.hash(key)];
        let node = bucket.head;
        let index = 0;
        while (node) {
            if (node.value === key) {
                bucket.removeAt(index);
                this.#load--;
                return true;
            }
            node = node.nextNode;
            index++;
        }
        return false;
    }

    length() {
        return this.#load;
    }

    clear() {
        this.#buckets = new Array(this.#capacity).fill().map((x) => new LinkedList());
        this.#load = 0;
    }

    keys() {
        const keys = [];
        this.#buckets.forEach((bucket) => {
            let node = bucket.head;
            while (node) {
                keys.push(node.value);
                node = node.nextNode;
            }
        });
        return keys;
    }

    resize() {
        const keys = this.keys();
        this.#capacity *= 2;
        this.clear();
        keys.forEach((key) => {
            this.set(key);
        });
    }
}
