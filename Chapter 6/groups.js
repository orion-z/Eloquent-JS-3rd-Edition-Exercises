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
            let valueIndex = this.array.indexOf(value);
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
