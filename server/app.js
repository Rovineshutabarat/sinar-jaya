import express from "express";
import { authRouter } from "./routes/auth.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
    origin: "https://www.sinar-jaya.my.id",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use("/auth", authRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
