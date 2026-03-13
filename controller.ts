export const login = (req, res) => {
    const { email, pwd } = req.body;
    if (email === 'boon@gmail.com' && pwd === '123456') {
        res.send('Login successful');
    } else { 
       res.status(401).send('Invalid credentials');
    }
};
