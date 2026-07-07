import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Minus } from "lucide-react"
import { div, h1 } from "motion/react-client"

export default function TechStack() {
    const TimeLine = "02 / techstack"
    const title = "Tools I build with"
    const techStack = [
        {
            category: "frontend",
            color: "bg-info/15 trext-info border-info/30",
            technologies: [
                "HTML5",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "TailwindCSS",
                "BootStrap",
            ],
        },

        {
            category: "backend",
            color: "bg-success/15 text-success border-success/30",
            technologies: [
                "PHP",
            ],
        },

        {
            category: "database",
            color: "bg-accent/15 text-accent border-accent/30",
            technologies: [
                "MySQL",
                "Supabase",
            ],
        },

        {
            category: "tools / devOps",
            color: "bg-danger/15 text-danger border-danger/30",
            technologies: [
                "Git",
                "GitHub",
                "Google Cloud",
                "Vercel",
                "Netlify",
                "Figma",
                "VS Code",
            ],
        },
    ];

    return (
        <>
            <div className="flex min-h-screen px-6 sm:px-10 lg:pl-28 lg:pr-16 py-16 sm:py-20 lg:py-22 items-center">
                <div className="grid gap-4 w-full">
                    <div className="flex items-center gap-2 text-info font-mono text-xs sm:text-sm">
                        <Minus className="shrink-0" /> {TimeLine}
                    </div>

                    <div>
                        <h1 className="text-3xl sm:text-4xl">
                            {title}
                        </h1>
                    </div>

                    <div>
                        <Card>
                            <CardContent className="p-3 sm:p-4">
                                <div className="space-y-2">
                                    <p className="text-muted-foreground px-2 sm:px-4">{`{`}</p>
                                    {techStack.map((stack) => (
                                        <div key={stack.category} className="space-y-3 px-4 sm:px-8 lg:px-12">
                                            <p className="text-xs font-mono text-info">
                                                "{stack.category}":
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {stack.technologies.map((tech) => (
                                                    <Badge key={tech} variant="secondary" className={`px-3 py-2 sm:px-5 sm:py-4 text-xs sm:text-sm ${stack.color}`}>
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <p className="text-muted-foreground px-2 sm:px-4">{`}`}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </>
    );
}