import { createReadStream } from 'fs';
import unzip from 'unzip';
import { EOL } from 'os';


const loadPhrases = (path) => new Promise((resolve, reject) => {
  createReadStream(path)
  .pipe(unzip.Parse())
  .on('entry', file => {
    let phrases = [];
    file.on('data', chunk => {
      phrases = phrases.concat(chunk.toString('utf-8').split(EOL));
    })
    file.on('end', () => resolve(phrases));
  })
});

export default loadPhrases;
