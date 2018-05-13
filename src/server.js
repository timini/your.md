import express from 'express';

import phraseMatcher from './matchPhrases';

const defaultPort = process.env.PORT || 8080;

export const initServer = (phrases, options = {}) => {
  // create the app
  const app = express()

  const { port = defaultPort } = options;
  
  // setup routes
  app.get('/', (req, res) => res.send(phraseMatcher(phrases, req.query.text)))

  // run the app
  return app.listen(port, () => console.info(`app started, listening on port ${port}`))
};
