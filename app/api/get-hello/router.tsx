import { NextResponse } from 'next/server';

export async function GET() {
  // randomly get true or false
  const shouldError = Math.random() > 0.5;

  if (shouldError) {
    return NextResponse.json(
      { error: 'Error getting the session' },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: 'Hello world!' });
}
