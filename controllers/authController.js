import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async (req, res, next) => {
  try {
    console.log("Register endpoint hit");
    console.log("Request body:", req.body);

    const { username, password } = req.body;

    const existing = await User.findOne({ username });
    console.log("Existing user found:", existing);

    if (existing) return res.status(400).json({ message: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashed });

    await user.save();
    console.log("User saved:", user);

    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    console.error("Register error:", err);
    next(err);
  }
};


export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};
