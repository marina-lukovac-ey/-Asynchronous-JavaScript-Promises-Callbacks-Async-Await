### ASYNC

> **_async_** keyword is used in front of function declarations...
> async functions automatically return Promise...
> if such a function returns a value... it is being wrapped into a Promise...
> returned value of a function is a resolve value of a promise

```
async function f(){
  return 'Hello world'
}
f();

async function fx(){
    return new Promise((resolve,reject)=>
      setTimeout(()=>resolve(true),1000)
    )
}
fx();
```

### AWAIT

> PROMISE IS NOT PENDING ANYMORE...
> **_AWAIT_** cannot be called within a regular, synchronous function

```

```

### FETCH WITH ASYNC/AWAIT:

```
async function getRandomDogImageAsyncAwait() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  let value = await res.json();
  console.log(value.message);
}
```

### TOP LEVEL AWAIT:

---

> Doesn't work out-of-the-box, from the node, but does in the browser...
> in the node throws error: awai is only valid in async funcitons and the top level bodies of modules... await is only available in node > 14.08
> SOLUTION TO THIS: wrap this with async function that is IIFE.... !!!! Brilliant
> SOLUTION 2: MAKE APP.JS TOP LEVEL MODULE By initializing npm and making main type: module
> SOLUTION 3: change the extension to .mjs

### HANDLING ERRORS USING ASYNC AWAIT...

```

```

### SEQUENTIAL VS PARALLEL EXECUTION:

---

> EXECUTE

- PROMISES 1 BY 1 OR
- PARALELL

```

```
