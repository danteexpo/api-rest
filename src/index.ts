import express from "express";
import router from "./routes/diaries";

const app = express();

// middleware that transforms req.body into json
app.use(express.json());

const PORT = 8080;

app.get("/ping", (_req, res) => {
	console.log("ping!");
	res.send("pong!");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

app.use("/api/diaries", router);
