### TESTING CALLBACK FUNCTIONS

- Environment setup
- Asynchronous testin is even harder than synch...
- NodeJS / Mocha / Chai
- Mocha: JS test framework in nodejs and browser
- Chai: BDD/TDD ASSERTION LIBRARY for node and the browser that can be delightfully paired with any javascript testing framework.
  //Assertion libraries are tools to verify that things are correct. This makes it a lot easier to test your code, so you don't have to do thousands of if statements. Example (using should.js and Node.js assert module): var output = mycode. doSomething(); output.

1. inside package.json ==>\
   `"scripts": {
   "test": "mocha"
   }
2. Inside root directory: Create test directory...
3. Inside test directory: Create calculate-square.test.js file
4. export - import function that you want to test into .test.js file
5. import `expect` function from 'chai'; // this function will help compare expected with compared results
6. write test cases using `describe('string',callback)

```
describe('stringNameOfAFunction',function(){
 it('should return 4 if passed 2',function(){
   calculateSquare(2,function(error,result){
      expect(result).to.equal(4)
   })
 });
 // testing error handling of a function
 it('should throw an error when a string is passed',function(done){
  calculateSquare('string',function(error,result)){
    expect(error).to.not.equal(null);
    expect(error.message).to.equal('Argument is not of type number');
    done();
  }
 })
});
```
