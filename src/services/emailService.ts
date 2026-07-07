import nodemailer from 'nodemailer';

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

// Configuração do transportador SMTP usando as variáveis do .env
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: false, // true para a porta 465, false para outras portas como 587
  auth: {
    user: process.env.SMTP_USER || 'suporte@stackfab.com.br',
    pass: process.env.SMTP_PASS || '',
  },
  tls: {
    rejectUnauthorized: false, // Evita falhas com certificados autoassinados da Hostinger
  },
});

export const sendContactEmail = async (data: ContactData) => {
  const { name, email, message } = data;

  try {
    const mailOptions = {
      from: `StackFab Suporte <${process.env.SMTP_FROM || 'suporte@stackfab.com.br'}>`,
      to: process.env.CONTACT_EMAIL || 'jgolart@professores.utfpr.edu.br',
      replyTo: email,
      subject: `Novo Orçamento de ${name} via stackfab.com.br`,
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; color: #1e293b;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #4f46e5; margin: 0; font-size: 22px; font-weight: 700;">Nova Solicitação de Orçamento</h2>
            <p style="font-size: 14px; color: #64748b; margin-top: 4px;">Recebida através da página institucional da StackFab</p>
          </div>
          <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #475569;">Nome:</strong> ${name}</p>
            <p style="margin: 0;"><strong style="color: #475569;">E-mail:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
          </div>
          <div style="border-left: 4px solid #4f46e5; padding-left: 16px; margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0; font-weight: 600; color: #475569;">Mensagem:</p>
            <p style="margin: 0; white-space: pre-wrap; color: #334155; line-height: 1.6;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;">
          <footer style="font-size: 12px; color: #94a3b8; text-align: center;">
            Este e-mail foi enviado automaticamente de suporte@stackfab.com.br
          </footer>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, data: info };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

