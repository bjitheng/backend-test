import express from 'express';
import { login } from './controller';

const router = express.Router();

router.get('/hsss', (req, res) => {
    res.send('Hello, World!');
});

router.post('/login', login);

export default router;