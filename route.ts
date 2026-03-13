import express from 'express';
import { login, register } from './controller';

const router = express.Router();

router.get('/hsss', (req, res) => {
    res.send('Hello, World!');
});

router.post('/login', login);
router.post('/register', register)

export default router;