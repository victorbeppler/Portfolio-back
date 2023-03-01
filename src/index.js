import express from "express";
import SendMail from "./routes/route-send-mail.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3333;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  app.use("", SendMail);
});
