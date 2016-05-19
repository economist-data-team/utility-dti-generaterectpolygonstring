import 'babel-polyfill';
import generateRectPolygonString from '../src';
import chai from 'chai';
chai.should();

describe('generateRectPolygonString', () => {
  it('should generate a valid polygon string', () => {
    const expectedOutput = '10,10 60,10 60,60 10,60';
    generateRectPolygonString(10, 10, 50, 50).should.equal(expectedOutput);
    generateRectPolygonString([ 10, 10, 50, 50 ]).should.equal(expectedOutput);
  });
  it('should accept a four-point set', () => {
    const expectedOutput = '10,10 50,10 50,50 10,50';
    generateRectPolygonString(10, 10, 50, 50, true).should.equal(expectedOutput);
    generateRectPolygonString([ 10, 10, 50, 50 ], true).should.equal(expectedOutput);
  });
});
