import Link from "next/link"

export default function Footer() {
    const github = "https://github.com/bijeyyy"
    const linkedin = "https://www.linkedin.com/in/bob-john-lapinig-3631083b5/"
    const gmail = "mailto:${email}"

    return (
        <>
            <footer className="grid gap-4">
                <div className="flex justify-center items-center gap-6">
                    <Link href={github} target="_blank" className="text-xs text-text-secondary hover:underline">Github</Link>
                    <Link href={linkedin} target="_blank" className="text-xs text-text-secondary hover:underline">Linkedin</Link>
                    <Link href={gmail} target="_blank" className="text-xs text-text-secondary hover:underline">Gmail</Link>
                </div>

                <div className="flex justify-center items-center mb-6">
                    <span className="text-xs text-muted">
                        © 2026 Bob Lapinig. All rights reserved.
                    </span>
                </div>
            </footer>
        </>
    );
}