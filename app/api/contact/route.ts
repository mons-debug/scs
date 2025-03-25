import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate data
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      );
    }

    // Here you would normally send this data to an email service, CRM, etc.
    // For now we'll just return success
    
    console.log('Contact form submission:', { name, email, phone, service, message });

    // Return success response
    return NextResponse.json(
      { message: 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de l\'envoi du message.' },
      { status: 500 }
    );
  }
} 