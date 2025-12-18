import Link from "next/link";
import { api, HydrateClient } from "~/trpc/server";
import logo from "~/assets/logo.svg";
import reactLogo from "~/assets/react.svg";
import archlinux from "~/assets/archlinux.svg";
import ghostty from "~/assets/ghostty.svg";
import tailwind from "~/assets/tailwind.svg";
import vercel from "~/assets/vercel.svg";
import nextjs from "~/assets/nextjs.svg";
import linkedin from "~/assets/linkedin.svg";
import github from "~/assets/github.svg";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <HydrateClient>
      <main className="container mx-auto mt-10 min-h-screen">
        {/* HERO */}
        <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8">
          {/* Avatar */}
          <div className="flex justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src="https://vdakuindv7.ufs.sh/f/11284QhVzXDu37GzIhVceVwxmriZpH7hOYaAFykBblfD2oL5"
                  alt="Sammy's Avatar"
                  width={120}
                  height={120}
                  className="ring-primary/40 h-40 w-40 rounded-full ring-2"
                  priority
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Very Hirable</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://github.com/kozykoding"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={github}
                    alt="GitHub logo"
                    width={120}
                    height={120}
                    className="h-12 w-12 p-2 transition-transform duration-300 hover:scale-125"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://www.linkedin.com/in/samuel-lee-690891b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={linkedin}
                    alt="LinkedIn logo"
                    width={120}
                    height={120}
                    className="h-12 w-12 p-2 transition-transform duration-300 hover:scale-125"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Title + Intro */}
          <div>
            <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight sm:text-5xl">
              Sammy{": "}
              <span className="text-primary">
                Junior Backend / Full-Stack Software Engineer
              </span>
            </h1>

            {/* Short "hero" summary – recruiter-facing */}
            <p className="text-muted-foreground mt-2 text-center text-lg">
              I build internal tools, dashboards, and backend APIs using Python,
              Go, SQL, and TypeScript (Next.js). Recently I&apos;ve been the de
              facto full-stack engineer for a small to medium business (SMB),
              consolidating sales/inventory/staffing data and shipping in-house
              web apps that power day-to-day operations.
            </p>

            <h3 className="text-primary mt-6 text-xl font-bold">About Me</h3>
            <p className="mt-2 max-w-5xl">
              Outside of work, I&apos;m usually leveling up my backend skills
              with Python, Go, and some C (Boot.dev backend track), tinkering in
              NeoVim, or experimenting with my Arch Linux / Omarchy setup. I
              also run a small homelab where I test services behind a reverse
              proxy, expand my server rack, and terminating my own ethernet
              cables for PoE cameras and other toys.
            </p>

            <p className="text-primary/90 dark:text-primary mt-4 text-center text-lg font-bold">
              Interested in a junior backend or full-stack SWE?{" "}
              <span className="text-destructive font-extrabold">
                Email: sammy@kozykoding.com
              </span>
            </p>

            {/* Keep the auth tease if you want, but make it secondary */}
            <p className="text-muted-foreground mt-2 text-center text-sm">
              Pssst...{" "}
              <span className="text-destructive text-lg font-extrabold font-semibold">
                sign in up top
              </span>{" "}
              to access hidden links and see my authentication integration.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="container mx-auto mt-12 max-w-5xl">
          <h3 className="text-primary text-xl font-bold">Projects</h3>
          <p className="text-muted-foreground mt-1 mb-4 max-w-xl text-base leading-relaxed">
            A few things I&apos;ve been working on. These are small, focused
            projects that show how I build backend-heavy apps and tools.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Kozyhome */}
            <div className="border-border bg-card rounded-lg border p-4">
              <h4 className="text-lg font-semibold">Kozyy Go</h4>
              <p className="text-muted-foreground mt-1 text-sm">
                My React + Go playground. I use this to test UI patterns, and
                component libraries.
              </p>
              <p className="text-primary mt-2 text-xs font-medium tracking-wide uppercase">
                Stack: Go, Vite React, TypeScript, Tailwind CSS, ShadCN
              </p>
              <div className="mt-3 flex gap-3 text-sm">
                <Link
                  href="https://github.com/kozykoding/go-react-bun"
                  className="text-primary underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code
                </Link>
              </div>
            </div>

            {/* Audits Dashboard */}
            <div className="border-border bg-card rounded-lg border p-4">
              <h4 className="text-lg font-semibold">Audits Dashboard</h4>
              <p className="text-muted-foreground mt-1 text-sm">
                My first attempt at a full stack SaaS for employee management,
                firearms sales and inventory (ATF/DOJ-style audits). It is also
                where I first tried AI integration using Cursor as my IDE.
              </p>
              <p className="text-primary mt-2 text-xs font-medium tracking-wide uppercase">
                Stack: TypeScript, Next.js, backend API + PostgreSQL
              </p>
              <div className="mt-3 flex gap-3 text-sm">
                <Link
                  href="https://github.com/kozykoding/audits-dashboard"
                  className="text-primary underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code
                </Link>
              </div>
            </div>

            {/* Bookbot */}
            <div className="border-border bg-card rounded-lg border p-4">
              <h4 className="text-lg font-semibold">Bookbot</h4>
              <p className="text-muted-foreground mt-1 text-sm">
                CLI text analysis tool that reads a book file and outputs stats
                like word counts and character frequencies.
              </p>
              <p className="text-primary mt-2 text-xs font-medium tracking-wide uppercase">
                Stack: Python
              </p>
              <div className="mt-3 flex gap-3 text-sm">
                <Link
                  href="https://github.com/kozykoding/bookbot"
                  className="text-primary underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code
                </Link>
              </div>
            </div>

            {/* Asteroids */}
            <div className="border-border bg-card rounded-lg border p-4">
              <h4 className="text-lg font-semibold">Asteroids (Python)</h4>
              <p className="text-muted-foreground mt-1 text-sm">
                CLI Asteroids game!
              </p>
              <p className="text-primary mt-2 text-xs font-medium tracking-wide uppercase">
                Stack: Python
              </p>
              <div className="mt-3 flex gap-3 text-sm">
                <Link
                  href="https://github.com/kozykoding/asteroids"
                  className="text-primary underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tech badges */}
        <section className="container mx-auto mt-12 max-w-5xl">
          <h3 className="text-primary mt-4 text-xl font-bold">Dev Stack</h3>
          <p className="text-muted-foreground mb-3 max-w-xl text-base leading-relaxed">
            Some of the tech involved in this site and my day-to-day dev
            environment:
          </p>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={logo}
                  alt="Bun logo"
                  width={120}
                  height={120}
                  className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Bun Runtime</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={reactLogo}
                  alt="React logo"
                  width={120}
                  height={120}
                  className="h-20 w-20 animate-[spin_20s_linear_infinite] p-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>React</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={nextjs}
                  alt="Next.js logo"
                  width={120}
                  height={120}
                  className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Next.js</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={tailwind}
                  alt="Tailwind logo"
                  width={120}
                  height={120}
                  className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Tailwind CSS</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={vercel}
                  alt="Vercel logo"
                  width={120}
                  height={120}
                  className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Vercel</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={archlinux}
                  alt="Arch Linux logo"
                  width={120}
                  height={120}
                  className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Arch Linux (btw...)</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={ghostty}
                  alt="Ghostty logo"
                  width={120}
                  height={120}
                  className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Ghostty Terminal</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}
