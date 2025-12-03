import "dotenv/config";
import "./config/cloudinary";
import express from "express";
import { userRouter } from "./routes/user.routes";
import { startupRouter } from "./routes/startup.routes";
import { errorHandler } from "./middleware/error.middleware";
import { authRouter } from "./routes/auth.routes";
import { memberRouter } from "./routes/member.routes";
import { fileRouter } from "./routes/file.routes";
import { companyRouter } from "./routes/company.routes";
import { stripeRouter } from "./routes/stripe.routes";
import { searchRouter } from "./routes/search.routes";
import { stripeController } from "./controller/stripe.controller";

const app = express();
const port = process.env.PORT || 8080;

app.post('/api/v1/stripe/webhook', express.raw({ type: 'application/json' }), stripeController.webhook.bind(stripeController));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/startup', startupRouter);
app.use('/api/v1/member', memberRouter);
app.use('/api/v1/company', companyRouter);
app.use('/api/v1/files', fileRouter);
app.use('/api/v1/search', searchRouter);
app.use('/api/v1/stripe', stripeRouter);


app.listen(port, () => console.log(`server running on http://localhost:${port}`));

// middleware for errors
app.use(errorHandler);