import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactEmail } from '@/lib/email'

const schema = z.object({
  name: z.string().min(2).max(100),
  contact: z.string().min(6).max(200),
  message: z.string().min(10).max(5000),
  honey: z.string().max(0).optional(),
})

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const data = schema.parse(await req.json())
    // Bot-detectie: honeypot ingevuld? Doe alsof het lukte maar verstuur niet.
    if (data.honey && data.honey.length > 0) {
      return NextResponse.json({ ok: true })
    }
    await sendContactEmail(data)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact-form fout:', err)
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 })
  }
}
