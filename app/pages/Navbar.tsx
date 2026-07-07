"use client"

import Profile from "@/public/profile.webp"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { href: '#home', label: "Home" },
        { href: '#about', label: "About" },
        { href: '#techstack', label: "TechStack" },
        { href: '#projects', label: "Projects" },
        { href: '#contact', label: "Contact" },
    ]

    return (
        <>
            <div className="sticky top-0 z-50 border-b h-18 px-4 sm:px-8 lg:px-12 border-gray-900 bg-background">
                <div className="flex justify-between items-center py-4">
                    {/* BADGE + NAV LINKS */}
                    <div className="flex items-center gap-6">
                        <div className="flex gap-2">
                            <Badge className="h-4 rounded-full p-2 bg-danger" />
                            <Badge className="h-4 rounded-full p-2 bg-accent" />
                            <Badge className="h-4 rounded-full p-2 bg-success" />
                        </div>

                        <nav className="hidden lg:flex gap-5">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="text-secondary">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                    </div>

                    {/* CTA BUTTON */}
                    <div className="hidden lg:block">
                        <Link href="#contact">
                            <Button className="h-10 w-28">
                                Hire Me
                            </Button>
                        </Link>
                    </div>

                    <Button className="lg:hidden text-secondary" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>

                </div>

                {isOpen && (
                    <div className="lg:hidden absolute left-0 right-0 top-full border-t border-gray-900 bg-background shadow-lg animate-in slide-in-from-top-2 fade-in duration-200 py-4 px-4 sm:px-8">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="text-secondary" onClick={() => setIsOpen(false)}>
                                    {link.label}
                                </Link>
                            ))}
                            <Button className="h-10 w-full mt-2" onClick={() => setIsOpen(false)}>
                                Hire me
                            </Button>
                        </nav>
                    </div>
                )}

            </div>
        </>
    );
}