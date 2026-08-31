import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, sessionId } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Mensagem inválida ou vazia.' },
        { status: 400 }
      );
    }

    const sessionKey = sessionId && String(sessionId).startsWith('web_test_') 
      ? sessionId 
      : `web_test_stackfab_${Date.now()}`;

    // Contexto instrucional para orientar a Sofia no portal institucional da StackFAB
    const systemPreamble = `[CONTEXTO STACKFAB: O usuário está no site institucional da StackFAB (https://stackfab.com.br). A StackFAB é uma fábrica de soluções web e IA que desenvolve: 1) Micro-SaaS e ERPs sob medida (FastAPI, Next.js, PostgreSQL); 2) Agentes de IA no WhatsApp com RAG e Google Calendar; 3) Infraestrutura Self-Hosted dedicada (Docker/Coolify); 4) Sites dinâmicos com área de membros e CRM. Ao ser perguntada sobre ERPs sob medida, sites ou produtos da StackFAB, confirme com entusiasmo que a StackFAB constrói essas soluções sob medida e convide para conversar no WhatsApp (41) 9848-6414.]\n\n`;

    const payload = {
      slug: 'sofiastackfab',
      session_id: sessionKey,
      message: `${systemPreamble}${message.trim()}`,
    };

    // Chamada direta ao backend oficial da Sofia em produção
    const sofiaResponse = await fetch('https://sofias.stackfab.com.br/api/public/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    if (!sofiaResponse.ok) {
      // Fallback gracioso caso a API esteja temporariamente em manutenção
      return NextResponse.json({
        response: 'Nossos engenheiros estão ajustando a Sofia neste instante! Se preferir, fale diretamente pelo WhatsApp: (41) 9848-6414.',
      });
    }

    const data = await sofiaResponse.json();
    return NextResponse.json({
      response: data.response || 'Olá! Como posso ajudar seu negócio hoje?',
    });
  } catch (error) {
    console.error('Erro ao conectar com a API da Sofia:', error);
    return NextResponse.json({
      response: 'Olá! Sou a Sofia da StackFab. Como posso te ajudar a construir seu sistema ou automatizar seus processos?',
    });
  }
}
