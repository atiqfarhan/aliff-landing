import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, location, struggle } = body

    // ConvertKit API configuration
    const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY
    const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID
    const CONVERTKIT_API_SECRET = process.env.CONVERTKIT_API_SECRET

    if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
      console.error('ConvertKit credentials missing')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Prepare tags based on location and struggle
    const tags = []
    if (location.toLowerCase().includes('usa') || location.toLowerCase().includes('united states')) {
      tags.push('US')
    }
    if (location.toLowerCase().includes('uk') || location.toLowerCase().includes('united kingdom')) {
      tags.push('UK')
    }
    if (location.toLowerCase().includes('uae') || location.toLowerCase().includes('dubai')) {
      tags.push('UAE')
    }
    
    // Add struggle-based tags
    if (struggle.toLowerCase().includes('work') || struggle.toLowerCase().includes('professional')) {
      tags.push('Professional')
    }
    if (struggle.toLowerCase().includes('hijab')) {
      tags.push('Hijabi')
    }

    // ConvertKit API call
    const response = await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email,
        first_name: name,
        fields: {
          location,
          struggle,
          source: 'aliff-landing-page',
          joined_at: new Date().toISOString(),
        },
        tags,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('ConvertKit API error:', data)
      return NextResponse.json(
        { error: 'Failed to subscribe to waitlist' },
        { status: response.status }
      )
    }

    // Log the submission (in production, you might want to use a database)
    console.log('Waitlist submission successful:', {
      email,
      name,
      location,
      tags,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined waitlist!',
        subscriber: data.subscription.subscriber
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: Add GET method to check API status
export async function GET() {
  return NextResponse.json(
    { 
      status: 'ok',
      message: 'ALIFF waitlist API is running',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}