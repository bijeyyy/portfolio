import Link from "next/link"
import { Minus, Folder, MoveUpRight, MoveUpRightIcon } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"

export default function Projects() {
    const TimeLine = "03 / projects"
    const Title = "Selected work"
    const projects = [
        {
            id: 1,
            title: "Hidden Pen",
            file: ".jsx",
            description: "Anonymous messaging platform inspired by NGL.",
            image: "/public/hidden_pen.svg",
            technologies: ["React", "Supabase", "Tailwind CSS"],
            github: "https://github.com/bijeyyy/Hidden-Pen",
            live: "https://hidden-pen-web.vercel.app/",
            featured: true,
        },
        {
            id: 2,
            title: "Vintage Photobooth",
            file: ".jsx",
            description: "Web-based photobooth with filters and photo strips.",
            image: "/public/logo.png",
            technologies: ["React", "Tailwind CSS", "Supabase"],
            github: "https://github.com/bijeyyy/vintage-photobooth",
            live: "https://vintage-photobooth-web.vercel.app/user_dashboard",
            featured: true,
        },
        {
            id: 3,
            title: "BrainForge AI",
            file: ".tsx",
            description:
            `An AI-powered study assistant that helps students learn through intelligent conversations,
            reviewer generation, quizzes, flashcards, and personalized explanations.`,
            image: "/public/logo.png",
            technologies: ["Next.js", "Tailwind CSS", "Supabase"],
            github: "https://github.com/bijeyyy/portfolio",
            live: "https://brain-forge-web.vercel.app",
            featured: true,
        }
    ]

    return (
        <>
            <div className="flex min-h-screen px-6 sm:px-10 lg:pl-28 lg:pr-16 py-16 sm:py-20 lg:py-22 items-center">
                <div className="grid gap-4 w-full">

                    <FadeInSection delay={0}>
                        <div>
                            <span className="flex items-center gap-2 text-info font-mono text-xs sm:text-sm">
                                <Minus className="shrink-0" /> {TimeLine}
                            </span>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={0.1}>
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl">
                                {Title}
                            </h1>
                        </div>
                    </FadeInSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <FadeInSection key={project.id} delay={0.2 + index * 0.1}>
                                <Card className="h-full w-92">
                                    <CardHeader>
                                        <CardTitle>
                                            <div className="flex gap-2 items-center">
                                                <Folder className="fill-current text-accent size-3.5" />
                                                {project.title}<span className="text-accent">{project.file}</span>
                                            </div>
                                        </CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <Badge key={tech} className="bg-success">{tech}</Badge>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 mt-8">
                                            <Link href={project.live} target="_blank" rel="nopener noreferer" className="flex items-center gap-1 text-xs font-medium text-info hover:underline">
                                                Live Demo
                                                <MoveUpRight className="size-4" />
                                            </Link>

                                            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-medium text-info hover:underline">
                                                Code
                                                <MoveUpRight className="size-4" />
                                            </Link>
                                        </div>

                                    </CardContent>
                                </Card>
                            </FadeInSection>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}