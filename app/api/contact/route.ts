import { Resend } from "resend";

const resend = new Resend (process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "beejeyyyy@gmail.com",
            replyTo: email,
            subject: `New message from ${name}`,
            text: message,
        });
        return Response.json({ success: true });
    } catch (err) {
        console.error(err);
        return Response.json({ error: "Failed to send" }, { status: 500 });
    }
}