import Profile from "@/public/profilee.webp"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Minus, File } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function About() {
    const title = "About"
    const description =
        `Hi! I'm Bob John Lapinig, a passionate Computer Science student and aspiring Full-Stack 
    Web Developer who enjoys turning ideas into functional and meaningful web applications. My journey
    into technology started with a curiosity about how websites work, and that curiosity quickly grew
    into a passion for programming, problem-solving, and continuous learning.

    As I continue my academic journey, I've been building projects that strengthen my skill in modern web 
    development while exploring new technologies and best practices. I believe that every project is an opportunity 
    to improve — not only as a developer but also a creative problem solver.

    Outside of coding, I enjoy exploring new technologies, learning from the developer community, and finding inspiration
    through design and user experience. I value clean code, thoughtful design, and creating applications that are both 
    functional and enjoyable to use.
    `
    const cardTitle = "README/md"
    const TimeLine = "01 / about"
    const aboutMe = (
        <>
            <span>
                `I'm a full-stack developer with a focus on clean architecture and interfaces that feel effortless to use. I've spent
                the last few year shipping products for startups and small teams - writing the frontend, the backend, and everything that
                connects them`
            </span>

            <span>
                I care about code that's easy for the next person to read, deadlines that are actually met, and clients who know exactly what's
                happening at every stage of a project.
            </span>
        </>
    )

    const items = [
        { label: "location", value: "Manila, Philippines" },
        { label: "availability", value: "Freelance & contract" },
        { label: "focus", value: "Web apps" },
    ]

    return (
        <>
            <div className="flex min-h-screen px-6 sm:px-10 lg:pl-28 lg:pr-16 py-16 sm:py-20 lg:py-22 items-center">
                <div className="grid gap-4 w-full">

                    <div>
                        <span className="flex items-center gap-2 text-info font-mono text-xs sm:text-sm">
                            <Minus className="shrink-0" /> {TimeLine}
                        </span>
                    </div>

                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl">
                            A quick introduction
                        </h1>
                    </div>

                    <div className="w-full">
                        <Card size="sm" className="w-full max-w-none">
                            <CardHeader>
                                <CardTitle>
                                    <span className="flex gap-2 items-center text-muted text-xs font-mono">
                                        <File className="size-3 fill-current text-primary" />{cardTitle}
                                    </span>
                                </CardTitle>
                                <hr />
                                <CardDescription className="grid gap-4 p-4 sm:p-6">
                                    <span className="text-primary font-bold text-xl sm:text-2xl">
                                        # About Me
                                    </span>

                                    <span className="grid gap-4 max-w-3xl text-sm sm:text-base">
                                        {aboutMe}
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Card className="bg-surface border-surface">
                                    <CardContent className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border gap-4 sm:gap-6">
                                        {items.map((item) => (
                                            <div key={item.label} className="space-y-1 p-4 sm:p-6">
                                                <p className="text-xs font-mono text-info uppercase">
                                                    {item.label}
                                                </p>
                                                <p className="text-sm font-semibold text-primary">
                                                    {item.value}
                                                </p>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </>
    );
}