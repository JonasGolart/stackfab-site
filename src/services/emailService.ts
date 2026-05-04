import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (data: ContactData) => {
  const { name, email, message } = data;

  try {
    const response = await resend.emails.send({
      from: 'StackFab Site <noreply@stackfab.com.br>',
      to: [process.env.CONTACT_EMAIL || 'jgolart@professores.utfpr.edu.br'],
      subject: `Novo Orçamento: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #7000ff;">Nova Solicitação de Orçamento</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <footer style="font-size: 12px; color: #888;">
            Este e-mail foi enviado automaticamente pelo site oficial da StackFab.
          </footer>
        </div>
      `,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
