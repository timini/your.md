import { createReadStream, createWriteStream } from 'fs';
import unzip from 'unzip';
import { EOL } from 'os';


const loadPhrases = (path) => new Promise((resolve, reject) => {
  createReadStream(path)
  .pipe(unzip.Parse())
  .on('entry', file => {
    let text = '';
    file.on('data', chunk => {
      text = text + chunk.toString('utf-8');
    })
    file.on('end', () => resolve(text.split(EOL)));
  })
});

export default loadPhrases;
