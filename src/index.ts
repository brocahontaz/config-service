import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Well, this is a start as good as any, I reckon.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
