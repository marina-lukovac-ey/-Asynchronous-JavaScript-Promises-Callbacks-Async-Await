// ES5 Syntax
// const calculateSquare = require("../calculate-square.mjs");
// const expect = require("chai").expect;
import { calculateSquare } from "../calculate-square.mjs"; //needs to be .mjs in order to use import export
import { expect } from "chai";

//write test cases: Group the test cases into a group using

describe("calculateSquare", function () {
  //test cases... all of them should somehow be related to eachother...
  // using function it
  it("Should return 4 if passed 2", function (done) {
    ///for async, the argument passed to the callback is done: function itself, that needs to be called when test is finished
    calculateSquare(2, function (error, result) {
      //1st arg: 2, second callback
      /* expect(result).to.equal(4); //this gets passed... */
      expect(result).to.equal(4); //this throws error... operator: strictEqual, actual: 4, expected: 5,showDiff: true
      done();
    });
  });
  it("Should throw an error if argument is passed as a string", function (done) {
    calculateSquare("string", function (error, result) {
      expect(error).to.not.equal(null);
      expect(error.message).to.equal("Argument of type number is expected");
      done();
    });
  });
});
