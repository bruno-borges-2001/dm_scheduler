
import { JWT } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';

const { GOOGLE_SERVICE_ACCOUNT, GOOGLE_SERVICE_KEY } = process.env;

export async function GET() {
  const client = new JWT({
    email: GOOGLE_SERVICE_ACCOUNT,
    key: GOOGLE_SERVICE_KEY,
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.readonly'
    ]
  })

  try {
    const { token } = await client.getAccessToken()
    return NextResponse.json(token, { status: 200 })
  } catch (err) {
    console.log(err)
    return NextResponse.json(err, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  const { token } = await req.json()

  try {
    const response = await fetch(
      'https://oauth2.googleapis.com/tokeninfo',
      { method: 'POST', body: JSON.stringify({ access_token: token }) }
    );

    const data = await response.json();

    if (!response.ok) throw new Error(data)

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}