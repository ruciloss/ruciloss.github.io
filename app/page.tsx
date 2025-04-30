import Image from "next/image";

export default function Home() {
    return (
        <div>
            Domovská stránka
            <Image
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            <a
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Link
            </a>
        </div>
    );
}
