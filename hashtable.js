
// implements using an array

class HashTable {

    constructor(val) {
        this._storage = [];
        this._tableSize = val;
       
    }

    insert(key, value){
        const index = this._hash(key, this._tableSize);
        
        if (!this._storage[index]) {
            this._storage[index] = [];
        }
        // [0,0,0,[]]  
        this._storage[index].push([key, value]);
        // [0,0,0,['a',1], ['b',2]] 
    }

    remove(){
        

    }

    retrieve(key) {
        const index = this._hash(key, this._tableSize);
        const arrayAtIndex = this._storage[index];
        
        if (arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++){
                const keyValueArray = arrayAtIndex[i];
                if (keyValueArray[0] === key) return keyValueArray[1];
            }
        }
    }
    // {string} str - the string to be hashed
    // {number} n - the size of the storage array
    // {number} - an integer between 0 and n
    _hash(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i) * 3;
        }
        return sum * n;
    }
}

const myHT = new HashTable(25); 
myHT.insert('a', 1)
myHT.insert('b', 2);
// hashTable { _storage: [0,0,0,['a',1],['b',2] 0,0,0]}
console.log(myHT);


