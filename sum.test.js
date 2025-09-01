import { describe } from 'node:test';
import sum from './sum.js';

describe('test for sum function', () => {
    test('sum of 1 and 2 is 3', () => {
    expect(sum(1, 2)).toBe(3);
    });
    test('sum of -1 and -2 is -3', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});