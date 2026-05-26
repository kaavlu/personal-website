import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "manavk@umich.edu", // your real email here
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}