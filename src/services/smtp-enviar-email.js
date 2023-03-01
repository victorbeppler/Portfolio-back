import { transporter } from "./smtp-email-config.js";

export async function sendMail(email, name, subject, message) {
  const mailOptions = {
    from: "victorhugobeppler@gmail.com",
    to: "victorhugobeppler@gmail.com",
    subject: subject,
    html: `<p>Nome: ${name}</p><p>Email: ${email}</p><p>Mensagem: ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return { code: 500, message: "Erro ao enviar e-mail!" };
    } else {
      console.log("E-mail enviado: " + info.response);
      return { code: 200, message: "E-mail enviado com sucesso!" };
    }
  });
}
