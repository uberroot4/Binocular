'use strict';

import * as path from 'path';
import * as fastText from 'fasttext';

const model = path.resolve(__dirname, '../utils/model.bin');
const classifier = new fastText.Classifier(model);

export async function getCommitTypeSingle(req, res) {
  if (!req.query.commitMessage) {
    res.sendStatus(400);
  }
  res.send(JSON.stringify(await classifier.predict('' + req.query.commitMessage, 5)));
}

export async function getCommitTypeList(req, res) {
  if (!req.body.commits) {
    res.sendStatus(400);
  }
  const commitsWithTypes = req.body.commits;
  for (const commit of commitsWithTypes) {
    commit.type = await classifier.predict('' + commit.message, 5);
  }
  res.send(JSON.stringify(commitsWithTypes));
}
