
import mut from './module.js'; // MUT = Module Under Test


test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});
test('Testing contains number  -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("hel1o");
    expect(got).toBe(expected);
});
test('Testing contains NOT numner -- succes', () => {
    const expected = false;
    const got = mut.containsNumbers("hello");
    expect(got).toBe(expected);
});
test('Testing div -- success', () => {
    const expected = 3;
    const got = mut.div(9,3);
    expect(got).toBe(expected);
});
test('Testing div result irrational -- success', () => {
    const expected = 4.5;
    const got = mut.div(9,2);
    expect(got).toBe(expected);
});
test('Testing div 0 divider -- success', () => {
    const expected = undefined;
    const got = mut.div(9,0);
    expect(got).toBe(expected);
});
