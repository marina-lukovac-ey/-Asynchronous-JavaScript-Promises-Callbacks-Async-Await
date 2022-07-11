const calculateSquare = require("../src/calculate-square.js");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);

describe("calculateSquare", function (done) {
  this.timeout(2000); //modify timeout here... in order to leave enough time for your tests
  it("should resolve with number 4 if passed number 2", function () {
    return calculateSquare(2).then((result) => {
      expect(result).to.be.above(3); //eventually chai
      expect(result).to.be.equal(4); //eventually chai
    });
  });
  it("should become fulfillsed when passed number 2", function () {
    return expect(calculateSquare(2)).to.be.fulfilled.notify(done);
  });
  it("should become rejected if passed a string instead of a number", function () {
    return calculateSquare("string").catch((reason) => {
      expect(reason).to.not.equal(null);
      expect(reason.message).to.equal("Argument of type number is expected");
    });
  });
});
//timeouts of mocha: by default mocha uses 2seconds timeout for every test case
//if there is needed more time for the execution then timeout settings should be changed
//otherwise tests will fail

//Making multiple Promise Assertion in a test case??? HOW TO:
