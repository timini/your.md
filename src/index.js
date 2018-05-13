// setup env vars before doing anything else!
import './env';
import loadPhrases from './readDictionary';
import { resolveApp } from './paths';
import { initServer } from './server';


if (process.env.NODE_ENV === 'development') console.warn('running in development mode!');

// specify the path to the dictionary file using an environment variable
const dictionaryPath = resolveApp(process.env.DICTIONARY_PATH);

loadPhrases(dictionaryPath)
.then(initServer)
