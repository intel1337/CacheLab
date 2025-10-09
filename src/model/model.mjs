import crypto from "crypto";

export class Key {
   constructor(key, value) { 
    this.key = key; 
    this.value = value; 
} }


export class SkipList{
  constructor(key,value){
    this.key = key
    this.value = value
    this.next = null
  }
}


export class HashMap {
  constructor(size = 8) {
    this.size = size;
    this.table = [];

    for (let i = 0; i < size; i++) {
        this.table[i] = [];
    }

    this.count = 0;
  }

  hash(key) {
    const hash = crypto.createHash("sha256");
    hash.update(String(key));
    const hashSliced = hash.digest("hex").slice(0, 8);
    const hashConvertedToInt = parseInt(hashSliced, 16);
    return hashConvertedToInt % this.size;
}

    rehash() {
        const previous = this.table;
        this.size *= 2;
        this.table = [];

        for (let i = 0; i < this.size; i++) {
            this.table[i] = [];
        }

        this.count = 0;

        for (let bucket of previous) {
            for (let kv of bucket) {
            this.set(kv.key, kv.value);
                }
            }
        console.log(`Après Rehash : ${this.loadFactor()}`)

        }
set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    let updated = false;

    for (let kv of bucket) {
      if (kv.key === key) {
        kv.value = value;
        updated = true;
        break;
      }
    }

    if (!updated) {
      bucket.push(new Key(key, value));
      this.count++;
    }
    console.log(`Current LoadFactor : ${this.loadFactor()}`)


    if (this.loadFactor() > 0.75) {
      this.rehash();
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (let kv of bucket) {
      if (kv.key === key) return kv.value;
    }
    return null;
    
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.count--;
        return true;
      }
    }
    return false;
  }

  loadFactor() {
    return this.count / this.size;
  }


}
