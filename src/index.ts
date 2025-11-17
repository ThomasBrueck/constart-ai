import "dotenv/config";
import express from "express";
import { DbConnection } from "./lib/db";
import { userRouter } from "./routes/user.routes";
import { postRouter } from "./routes/post.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


app.use('/api/v1/user', userRouter);
app.use('/api/v1/post', postRouter);

DbConnection().then(() => {
    app.listen(port, () => console.log(`server running on http://localhost:${port}`));
}).catch( e => {
    console.error(e);
});

app.use(errorHandler);