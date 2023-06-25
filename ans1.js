class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(11);
stack.add(12);
stack.add(14);
stack.add(18);
console.log(stack.items);  //Output-[ 11, 12, 14, 18 ]

stack.remove();
console.log(stack.items); //Output-[ 11, 12, 14 ]

console.log(stack.peek()); //Output-14

console.log(stack.isEmpty()); //Output-false

console.log(stack.size()); //Output-3

stack.clear();
console.log(stack.items); //Output-[]