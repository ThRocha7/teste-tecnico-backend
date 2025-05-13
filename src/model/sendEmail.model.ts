import path from "path";
import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
configDotenv();

const setTransporter = () => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    return transporter;
  } catch (error) {
    throw error;
  }
};

export const welcomeEmail = async (email: string, username: string) => {
  try {
    const transporter = setTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Serviços da SmartEnvios",
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Email Agradecimento</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f6f9fc;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: auto;
              background-color: #ffffff;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            .title {
              color: #333333;
              font-size: 24px;
              margin-bottom: 20px;
            }
            .content {
              color: #555555;
              font-size: 16px;
              line-height: 1.5;
            }
            .button {
              display: inline-block;
              margin: 10px 0px;
              background-color: #542673;
              color: white;
              padding: 12px 20px;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
            }
            .footer p {
              margin-top: 40px;
              font-size: 12px;
              color: #999999;
              text-align: center;
              max-width: 300px
            }
            .atte {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 20px;
            }
            .logo {
              width: 100px;
              height: auto;
            }
            .atte p {
              color: #555555;
              font-size: 16px;
              line-height: 1.5;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="title">Olá, ${username}!</div>
            <div class="content">
              <p>
                Agradecemos por utilizar um dos nossos serviços — é um prazer ter você
                conosco.
              </p>

              <p>
                Aproveite para conhecer todas as soluções que oferecemos. Basta clicar
                no botão abaixo:
              </p>

              <a href="https://https://smartenvios.com" class="button">Saiba mais</a>

              <p>
                Estamos sempre à disposição!
                <br />
                <br />
                Atenciosamente,
                <br />
              </p>
            </div>
            <div class="footer">
              <div class="atte">
                <img src="cid:logo-email" class="logo" />
                <p>Equipe Backend.</p>
              </div>
              <p>
                Você está recebendo este e-mail porque se cadastrou em nosso site.
              </p>
            </div>
          </div>
        </body>
      </html>
      `,
      attachments: [
        {
          filename: "logo-email.png",
          path: path.resolve(__dirname, "../utils/logo-email.png"),
          cid: "logo-email",
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email enviado:", info.response);
    return true;
  } catch (error) {
    console.error("Erro ao enviar:", error);
    return false;
  }
};
