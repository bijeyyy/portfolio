import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Profile from "@/public/profile.webp"
import { Play, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
    const role = (
        <>
            <span className="text-info">const</span>{" "}
            <span className="text-secondary">role</span>{" "}
            <span className="text-secondary">=</span> {" "}
            <span className="text-accent/70">"Frontend Developer</span>
            <span className="text-secondary">;</span>
        </>
    )

    const description =
        `I design and build fast, reliable web applications - from pixel-perfect
    interfaces to APIs and database behind them. I partner with companies 
    and founders who need someone who can own a feature end to end.`

    return (
        <>
            <div className="flex min-h-screen items-center px-6 sm:px-10 lg:px-0 lg:pl-28">
                <div className="flex items-start gap-4 sm:gap-6 w-full">
                    {/* NUMBERS */}
                    <div className="hidden sm:grid gap-4 text-muted font-mono text-sm sm:text-base">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                    </div>

                    <div className="grid gap-5 sm:gap-6 w-full min-w-0">

                        <div className="flex justify-center md:justify-start">
                            <Badge className="font-mono rounded-full bg-success/20 border-success/50 text-xs py-3 px-2 sm:text-sm text-success sm:p-4">
                                • Available for freelance & intern
                            </Badge>
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <span className="sm:text-md text-sm font-mono wrap-break-word">
                                {role}
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 text-center sm:text-left">
                            <Image src={Profile} alt="profile" className="h-20 w-20 sm:h-32 sm:w-32 lg:h-42 lg:w-42 rounded-lg shrink-0" />
                            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold font-sans leading-tight">Hi, I'm Bob Lapinig</h1>
                        </div>

                        <div>
                            <span className="block max-w-3xl text-sm sm:text-lg text-secondary text-center sm:text-left mx-auto sm:mx-0">
                                {description}
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link href="#contact">
                                <Button className="font-mono h-12 w-full sm:w-42">
                                    <Play className="fill-current text-bg" /> Hire Me
                                </Button>
                            </Link>

                            <Link href="#projects">
                                <Button variant="outline" className="h-12 w-full sm:w-42 border-muted font-mono">
                                    View Projects <ArrowRight />
                                </Button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}