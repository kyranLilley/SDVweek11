//Linked list example
const head = Symbol("head");

class LinkedList {
    constructor() {
        this[head] = null;
    }

    add(data) {

        // create a new node
        const newNode = new LinkedListNode(data);
                
        //special case: no items in the list yet
        if (this[head] === null) {

            // just set the head to the new node
            this[head] = newNode;
        } else {

            // start out by looking at the first node
            let current = this[head];

            // follow `next` links until you reach the end
            while (current.next !== null) {
                current = current.next;
            }
           
            // assign the node into the `next` pointer
            current.next = newNode;            
        }
    }
}


//Recursion
let countDown = function f(fromNumber) { //Declare function and assign functuion f 
  console.log(fromNumber);            //console log fromnumber

  let nextNumber = fromNumber - 1;   //declare next number to fromnumber minus 1

  if (nextNumber > 0) {     //if condition , if nextnumber is bigger than 0 continue
      f(nextNumber);      //call functionn with next number
  }
}

let newYearCountDown = countDown;  //declare function to other name
countDown = null;
newYearCountDown(10);       //call function with an argument of 10 to count down