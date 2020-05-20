# SDVweek11

Introduction to Data Structure stores. 

In javascript you can have multiple types of Data Structure stores , some of the main ones include - 

Arrays. 
An array is used to store values/data and is typically set as a vaiable so it can be later called in code. Each element of this array has stored data that can be called in the arrays entirety or seperate

Queues.
Queues are sequential structures , Queues are similar to stacks however queues are FIFI as opposed to LIFO. They are a way to keep requests in order until a time the request can be recieved. 

Linked Lists.
Linked Lists are a more unique data structure , These elements that get stored are not as physical as arrays and ques they are stored in "nodes that contain a pointer to the next node."Linked lists will be spoken about more in section 2 of this task. 

Advantages 
-easier to add and remove elements of array that are new
-easier than restructuring an array

Dissadvantages
-more memrory use than arrays.
-not as efficent to get one element.
-also not as effective to check elements/valuses backwards.

"DECLARE CLASS Node
DECLARE STRING name
DECLARE Node next
END DECLARE
DECLARE Node top = NULL"
Trees.
Tree's are also similar to linked lists , the nodes hold pointers marking its connection to other nodes and element data.

this is a "relation-bases data structure" with its very good in the use of hierarchial structures.

Graphs.
are a usefull an  data structure hat is relation based. Graps can "convey relationship charts in texual form". These can be used for online social communication websites. 

Hash Tables(map).
Are another data structure primarily for storing vast amounts of information. Hash Tables will pair a key and value.

The key is turned into a string to make a number value that the hash function can use to point towards the location on the hash table holding that value.



Recursion is a function that will keep calling itselt until the time that it is not.
usually calling inside of itself.

can be used with linked lists.
Advantages 
- recursion can reduce time 
- better at tree traversal 
-reduces need to write more code.

Disadvantages 
-can be more complex than other methods.
-also can be slow
-it will use more memory

Function find_max( list ) 
 
    possible_max_1 = first value in list 
    possible_max_2 = find_max ( rest of the list ); 
             
    if ( possible_max_1 > possible_max_2 ) 
        answer is possible_max_1 
    else 
        answer is possible_max_2 
        end 
 
    end 