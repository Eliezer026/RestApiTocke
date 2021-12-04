import express from "express";
import morgan from "morgan";
import Products from "./routes/ProductsRoutes";
import { createroles } from "./libs/initialSetup";
import authRouter from "./routes/auth.routes";
import sendConfirmation from "./routes/sedConfirmatio.routes";
import createOrder from "./routes/createOrder.routes";
import "./database";

const app = express();
createroles();

app.use(express.json());
app.use(morgan("dev"));

app.use("/Products", Products);
app.use("/api/auth", authRouter);
app.use("/verification", sendConfirmation);
app.use("/orders", createOrder);

app.listen(4000);
console.log("Serve listen on port ", 4000);
