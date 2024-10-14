import LinkedList from "./LinkedList.js";

export default class HashMap {
    #capacity = 16;
    #load = 0;
    #buckets = new Array(this.#capacity).fill().map((x) => new LinkedList());
    #loadFactor = 0.75;

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
        // Increase capacity if needed
        if (this.#load / this.#capacity >= this.#loadFactor) this.resize();
        const bucket = this.#buckets[this.hash(key)];
        let node = bucket.head;
        while (node) {
            if (node.value.key === key) {
                node.value.value = value;
                return;
            }
            node = node.nextNode;
        }
        bucket.append({ key, value });
        this.#load++;
    }

    get(key) {
        const bucket = this.#buckets[this.hash(key)];
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
        const bucket = this.#buckets[this.hash(key)];
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
        const bucket = this.#buckets[this.hash(key)];
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

    clear() {
        this.#buckets = new Array(this.#capacity).fill().map((x) => new LinkedList());
        this.#load = 0;
    }

    keys() {
        const keys = [];
        this.#buckets.forEach((bucket) => {
            let node = bucket.head;
            while (node) {
                keys.push(node.value.key);
                node = node.nextNode;
            }
        });
        return keys;
    }

    values() {
        const values = [];
        this.#buckets.forEach((bucket) => {
            let node = bucket.head;
            while (node) {
                values.push(node.value.value);
                node = node.nextNode;
            }
        });
        return values;
    }

    entries() {
        const entries = [];
        this.#buckets.forEach((bucket) => {
            let node = bucket.head;
            while (node) {
                entries.push([node.value.key, node.value.value]);
                node = node.nextNode;
            }
        });
        return entries;
    }

    resize() {
        const entries = this.entries();
        this.#capacity *= 2;
        this.clear();
        entries.forEach((array) => {
            this.set(array[0], array[1]);
        });
    }
}
