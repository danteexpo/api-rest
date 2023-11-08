import express from 'express';
import * as services from '../services/diaries';
import { toNewDiary, toUpdatedDiary } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(services.getDiaries());
});

router.get('/:id', (req, res) => {
  const diary = services.getDiary(Number(req.params.id));
  return diary != null ? res.send(diary) : res.sendStatus(404);
});

router.get('/without', (_req, res) => {
  res.send(services.getDiariesWithoutComments());
});

router.post('/', (req, res) => {
  try {
    const newDiary = toNewDiary(req.body);

    const Diary = services.postDiaries(newDiary);

    res.json(Diary);
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message);
    }
  }
});

router.put('/:id', (req, res) => {
  try {
    const updatedDiary = toUpdatedDiary(req.body);

    const Diary = services.updateDiary(updatedDiary);

    res.json(Diary);
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message);
    }
  }
});

router.delete('/:id', (req, res) => {
  const diary = services.deleteDiary(Number(req.params.id));
  return diary != null ? res.send(diary) : res.sendStatus(404);
});

export default router;
