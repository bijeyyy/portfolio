"use client";
import { useState } from "react";
import { Minus, MessageCircleMore } from "lucide-react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { p } from "motion/react-client";
import FadeInSection from "@/components/FadeInSection"

export default function Contact() {
    const TimeLine = "04 / contact"
    const Title = "Let's work together"
    const cardTitle = "contact.sh"
    const contentTitle = "$ contact --init"
    const email = "bobjohnlapinig10@gmail.com"
    const linkedin = "https://www.linkedin.com/in/bob-john-lapinig-3631083b5/"
    const github = "https://github.com/bijeyyy"
    const emailLink = "mailto:${email}"

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) return;
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed");

            setStatus("sent");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <>
            <div className="flex min-h-screen px-4 sm:px-8 md:pl-16 lg:pl-28 py-12 md:py-22 items-center">
                <div className="grid gap-4 w-full">

                    <FadeInSection delay={0}>
                        <div className="flex gap-2 font-mono text-info text-sm">
                            <Minus />{TimeLine}
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={0.1}>
                        <div>
                            <h1 className="text-2xl sm:text-3xl">
                                {Title}
                            </h1>
                        </div>
                    </FadeInSection>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <FadeInSection delay={0.2}>
                            <Card className="w-full lg:w-175">
                                <CardHeader>
                                    <CardTitle>
                                        <div className="flex items-center gap-2 text-muted">
                                            <MessageCircleMore className="size-4 fill-current text-primary" />{cardTitle}
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <hr />
                                <CardContent>

                                    <div>
                                        <span className="text-success font-mono">{contentTitle}</span>
                                    </div>

                                    <div className="grid gap-6">

                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                            <div className="grid gap-4 mt-8 w-full">
                                                <Label htmlFor="name" className="text-secondary font-mono">--name</Label>
                                                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="p-6 placeholder:text-muted" />
                                            </div>

                                            <div className="grid gap-4 mt-8 w-full">
                                                <Label htmlFor="email" className="text-secondary font-mono">--email</Label>
                                                <Input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className="p-6 placeholder:text-muted" />
                                            </div>
                                        </div>

                                        <div className="grid gap-4">
                                            <Label htmlFor="message" className="text-secondary font-mono">--message</Label>
                                            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." className="h-22" />
                                        </div>

                                        <div>
                                            <Button onClick={handleSubmit} disabled={status === "sending"} className="font-mono w-full h-12">{status === "sending" ? "$ sending..." : status === "sent" ? "$ message_send()" : "$ send_message()"}</Button>
                                            {status === "error" && (<p className="text-destructive text-sm mt-2 font-mono">error: failed to send</p>)}
                                        </div>

                                    </div>

                                </CardContent>
                            </Card>
                        </FadeInSection>

                        <FadeInSection delay={0.3}>
                            <Card className="w-full h-full lg:w-100">
                                <CardHeader>
                                    <CardTitle>
                                        <span>
                                            Reach me directly
                                        </span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-8">

                                    <div className="grid gap-2">
                                        <Label htmlFor="email" className="font-mono text-xs text-muted">email</Label>
                                        <Link href={emailLink} target="_blank" className="text-xs text-secondary hover:underline">{email}</Link>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="linkedin" className="font-mono text-xs text-muted">linkedin</Label>
                                        <Link href={linkedin} target="_blank" className="text-xs text-secondary hover:underline">linkedin.com/in/bob-john-lapinig</Link>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="github" className="font-mono text-xs text-muted">github</Label>
                                        <Link href={github} target="_blank" className="text-xs text-secondary hover:underline">{github}</Link>
                                    </div>

                                    <div>
                                        <Label className="font-mono text-xs text-muted">response time</Label>
                                        <span className="text-xs text-secondary">usually within 24 hours</span>
                                    </div>

                                </CardContent>
                            </Card>
                        </FadeInSection>

                    </div>

                </div>
            </div>
        </>
    );
}