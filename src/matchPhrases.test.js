import phraseMatcher from './matchPhrases';

it('should return no matches when input is incomplete', () => {
  let phrases;
  expect(phraseMatcher(phrases, '')).toEqual([]);
  phrases = ['hello']
  expect(phraseMatcher(phrases)).toEqual([]);
  expect(phraseMatcher(phrases, '')).toEqual([]);
});

it('should not return matches when there are none', () => {
  expect(phraseMatcher(['test'], 'nothing')).toEqual([]);
  expect(phraseMatcher(['a', 'b'], '1')).toEqual([])
});

it('should return matches correctly', () => {
  expect(phraseMatcher(['a', 'b'], 'a, b')).toEqual(['a', 'b']);
  expect(phraseMatcher(['a', 'b'], 'abba')).toEqual(['a', 'b']);
});
