import express from "express";
import { sendMail } from "../services/smtp-enviar-email.js";

const route = express.Router();

route.post("/sendmail", async (req, res) => {
  const { name, email, subject, message } = req.body;
  //   console.log(req.body);
  const response = await sendMail(email, name, subject, message);
  console.log(response);
  res.status(200).send("Email enviado com sucesso!");
});

export default route;
