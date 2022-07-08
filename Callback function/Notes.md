### PROMISES

### CALLBACKS

### ASYNC ... AWAIT

### FUNDAMENTAL CONCEPTS: 3

- INTRO

- DIFFERENCE BETWEEN SYNCHRONOUS AND ASYNCHRONOUS ACTIONS

  - Synchronous code is blocking, nothing else will not execute until this is finished with execution
  - Asynchronous function is called, then other continue executing, it is only neccessary for the next code to have previous called, and not totally executed
    ... Only after all the synchronous calls are executed, the asynchronous callbacks get invoked ...

  - Typical examples of async code: setTimeout, setInterval

* V8: Google Chrome Engine...
  JS uses 2 important data structures:

  - Call Stack
  - Message Queue: List of Tasks to be processed

    - in nodeJS: when something new is read from the file a new task is added to the queue
    - in browser: whenever an event occurs an additional task is added to the queue
    - adding tasks using setTimeout, setInterval

  - JS engine periodically checks if there are new tasks in the queue
  - Tasks are processed completely before new ones are taken

  ### -------------------------------------------------------------

  ##### There is a special process that checks if there are any new tasks in the message queue. ====> EVENT LOOP <====

  1. 1ST PASS: CREATE GLOBAL EXECUTION CONTEXT IN CALL STACK
  2. INVOKING print1 ==> creates new EXE-CON in the Call Stack ==> this represents print1 function with local variables
  3. after print1 is processed, it is removed from the Call Stack...
  4. Invoking print2 ==> creates new exe-con for print2, adds to call stack, also for the function invoked inside the print2 function, created new exe con ==> place on top of the call stack... done processing inside function, remove it from the call stack,
     done processing print2 function remove it from the call stack also
  5. Invoking print3 ==> create new exe-con for print3, adds to call stack, readFile is invoked... starts executing, since it is not synchronous function, doesn't continue executing right away... instead : it moves on ==>
     there is stepping out from the print3 function, and
  6. Invoking print4 ==> create exe con, add to call stack; in the meanwhile, .readFile from print3 has finally finished reading the file, and the new task has been added to the message queue... this task has a refference to the callback...
     print4 is finished executing, removed from the callstack
  7. Since this is the last line of the script, everything is removed from the callstack...
  8. Everytime the Call Stack is empty, JS Engine checks if there is sth in the message queue. Now it is callback with the reference to the callback...
     //EVENT LOOP constantly checks if anything is in the message queue, and then executes it...
  9. JS Engine takes this task and creates new exe con, puts to call stack, ==> after done executing removes from the call stack, checks again the message queue... If nothing : DONE...

- CALLBACKS: Pros and Cons
  Any function that is passed to another function as argument...
  Functions are first

  ##### PROS:

      - Simplicity
      - Popularity

  ##### CONS:

      - Lack of readability: Code that uses callbacks is not linear... this is why sometimes it is not easy to understand the code executing...
      - Callback hell... Several callbacks that depend on eachother...

- TESTING CALLBACKS: Unit Tests...

- PROMISES: Easily avoiding Callback

- TESTING Promises: Unit Tests...

- Async / Await
