// array 


class HashTable {

    constructor() {
        this.storage = [];
        this.length = 0;
        this.head = 0;
    }


    insert(record){
        this.storage[this.length + this.head] = record;
        this.length++;
    }

    remove(){

    }
}
// pass key and value


