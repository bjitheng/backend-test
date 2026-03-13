import express from 'express';
import { createServer } from 'http';
import router from './route';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = createServer(app);

app.use('/test123', router);
// we need to write module management !!
//becareful of the error


server.listen(3000, () => {
  console.log('Server is running on port 3000');
});