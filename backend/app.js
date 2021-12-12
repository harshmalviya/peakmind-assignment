const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController");

const userRouter = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
