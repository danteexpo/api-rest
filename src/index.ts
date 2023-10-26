import express from 'express';
import cors from 'cors';
import router from './routes/diaries';

const PORT = 8080;

const app = express();

// middleware that transforms req.body into json
app.use(express.json());

app.use(cors());

app.use('/api/diaries', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
