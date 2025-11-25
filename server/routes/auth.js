import { Router } from "express";
import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authRouter = Router();

authRouter.post("/register", async (req, res) => {
    const { username, password, name, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const createdAt = new Date();
    const [result] = await db.execute(
        "INSERT INTO user (username, password, name, role, createdAt) VALUES (?, ?, ?, ?, ?)",
        [username, hash, name, role, createdAt]
    );
    res.json({ id: result.insertId, username, name, role, createdAt });
});

authRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const [rows] = await db.execute("SELECT * FROM user WHERE username = ?", [username]);
    if (!rows.length) return res.status(401).json({ message: "Invalid credentials" });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role: user.role }, "secretkey");
    res.json({
        token,
        user: {
            id: user.id,
            username: user.username,
            name: user.name,
            role: user.role,
            createdAt: user.createdAt
        }
    });
});
