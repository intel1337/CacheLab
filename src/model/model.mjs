import crypto from "crypto";

export class Key {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}



export class HashMap {
  constructor(size = 8) {
    this.size = size;
    this.table = new Array(size).fill(null).map(() => []); 
  }

  hash(key) {
    const hash = crypto.createHash("sha256");
    hash.update(String(key));
    const hashSliced = hash.digest("hex").slice(0, 8);
    const hashConvertedToInt = parseInt(hashSliced, 16);
    const hashIndex = hashConvertedToInt % this.size;
    return hashIndex;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index]; 
    let found = false;

    for (let kv of bucket) {
      if (kv[0] === key) {
        kv[1] = value;
        found = true;
        break;
      }
    }

    if (!found) {
      bucket.push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index]; 

    for (let kv of bucket) {
      if (kv[0] === key) {
        return kv[1];
      }
    }

    return null;
  }
    delete(key) {       
    const index = this.hash(key);
    const bucket = this.table[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    }
    
}
