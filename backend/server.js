const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");
const cors = require("cors");

app.use(cors({ origin: ['https://laundri-x.netlify.app','http://localhost:5173'], credentials: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;
connectDb();

app.use("/api/orders", require("./routes/ordersRoutes"));
app.use("/api/user", require("./routes/userRoutes")) /
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
