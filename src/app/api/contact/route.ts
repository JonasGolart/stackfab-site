import { NextResponse } from 'next/server';
import { sendContactEmail, ContactData } from '@/services/emailService';

export async function POST(request: Request) {
  try {
    const body: ContactData = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    const result = await sendContactEmail(body);

    if (result.success) {
      return NextResponse.json({ message: 'E-mail enviado com sucesso!' });
    } else {
      return NextResponse.json(
        { error: 'Falha ao enviar e-mail' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
