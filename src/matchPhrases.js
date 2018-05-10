const escapeRegExp = (str) =>
  str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

const phraseMatcher = (phrases = [], text = '') => {
  if (typeof text !== 'string') throw new Error('text must be a string');
  if (!Array.isArray(phrases)) throw new Error('createMatcher takes an array of strings');

  return phrases.reduce((acc, phrase) => {
    if (phrase === '') return acc;
    if (RegExp(escapeRegExp(phrase), 'g').test(text)) acc.push(phrase);
    return acc;
  }, [])
}

export default phraseMatcher;
