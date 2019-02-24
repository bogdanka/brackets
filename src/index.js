module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0 || str.length == 0) return false;
    let stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        const currentSymbol = str[i];
        const lastAddedBracket = stack.get();
        for (let j = 0, n = bracketsConfig.length; j < n; j++) {
            const openingBracket = bracketsConfig[j][0];
            const closingBracket = bracketsConfig[j][1];
            if (lastAddedBracket == openingBracket && currentSymbol == closingBracket)
                stack.delete();
            else if (currentSymbol == openingBracket)
                stack.add(currentSymbol);
        }
    }
    return stack.isEmpty();
}

class Stack {


    constructor() {
        this.arr = [];
    }

    add(number) {
        this.arr.push(number);
    }

    get() {
        return this.arr[this.arr.length - 1];
    }

    delete() {
        this.arr.pop();
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}




