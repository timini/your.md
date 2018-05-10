import loadPhrases from './readDictionary';
import setupEnv from './env';
import { resolveApp } from './paths';
import { initServer } from './server';


// make sure dotenv files are read OK
setupEnv();

// specify the path to the dictionary file using an environment variable
const dictionaryPath = resolveApp(process.env.DICTIONARY_PATH);

loadPhrases(dictionaryPath)
.then(initServer)
