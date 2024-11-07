const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Реєстрація
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        console.log('Received request to register user:', username, password);

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            console.log('User already exists');
            return res.status(400).json({ message: 'Користувач вже існує' });
        }
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log('Hashed password:', hashedPassword);
        }
        catch (error) {
            console.log("Помилка при хешуванні");
            console.error(error);
        }
        try {
            const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        console.log('User saved successfully');
        }
        catch(error){
            console.log("Помилка при створенні юзера");
            console.error(error);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Логін
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Користувача не знайдено' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Невірний пароль' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user._id, username: user.username } });
    } catch (error) {
        res.status(500).json({ message: 'Помилка сервера' });
    }
});

module.exports = router;
