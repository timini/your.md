const escapeRegExp = (str) =>
  str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

const phraseMatcher = (phrases = [], text = '') => {
  if (!Array.isArray(phrases)) throw new Error('phrases must be an array of strings');
  if (typeof text !== 'string') throw new Error('text must be a string');

  return phrases.reduce((acc, phrase) => {
    // skip empty phrases
    if (phrase === '') return acc;
    // check text for phrase
    if (RegExp(escapeRegExp(phrase), 'g').test(text)) acc.push(phrase);
    return acc;
  }, [])
}

export default phraseMatcher;
