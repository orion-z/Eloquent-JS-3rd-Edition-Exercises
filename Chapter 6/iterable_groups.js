class Group {
    constructor(){
        this.array = []
    };

    add(value) {
        if (!this.array.includes(value)) {
            this.array.push(value);
        }
    }
    delete(value) {
        if (this.array.includes(value)) {
            valueIndex = this.array.indexOf(value);
            delete this.array[valueIndex];
        }
    }
    has(value) {
        if (this.array.includes(value)) return true;
        else return false;
    }

    static from(iterObj) {
        let x = new Group();
        for (this.iter of iterObj) {
            x.add(this.iter);
        }
        return x;
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.item = 0;
    }

    next() {
        if (this.item == this.group.array.length) {
            return {done: true};
        }
        let value = this.group.array[this.item];
        this.item++;
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}
