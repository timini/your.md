import express from 'express';

import phraseMatcher from './matchPhrases';


// create the app
export const app = express()

const port = process.env.PORT || 8080;

export const initServer = phrases => {
  app.get('/', (req, res) => res.send(phraseMatcher(phrases, req.query.text)))
  app.listen(port, () => console.info(`app started, listening on port ${port}`))
};
