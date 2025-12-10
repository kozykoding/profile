import Link from "next/link";
import { LatestPost } from "~/app/_components/post";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default async function Home() {
  //const { user } = await withAuth();
  const hello = await api.post.hello({ text: "from tRPC" });
  //const welcomeMessage = user ? `Welcome ${user.firstName}!` : "Welcome";

  return (
    <HydrateClient>
      <main className="container mx-auto mt-40 min-h-screen">
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
          <div className="flex justify-center">
            <div className="flex">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://github.com/kozykoding"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={github}
                      alt="Github logo"
                      width={120}
                      height={120}
                      className="h-12 w-12 p-2 transition-transform duration-300 hover:scale-125"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex">
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
          </div>

          {/* Title + Intro */}
          <div>
            <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight sm:text-5xl">
              Sammy{": "}
              <span className="text-primary">
                Software Enginer / Backend Developer / Analyst
              </span>
            </h1>
            <h3 className="text-primary mt-4 text-xl font-bold">About Me -</h3>
            <p className="mt-2 max-w-3xl">
              In my free time, I&apos;m usually self-learning / practicing
              backend development projects with Python, Go, some C, or messing
              around in NeoVim, and probably playing around with my Arch Linux /
              Omarchy layout.
              <br />
              <br />
              OR I&apos;m messing around with my homelab testing out projects to
              run behind my reverse proxy, or expanding my server rack, or
              running ethernet cable through the attic for PoE cameras, stuff
              like that.
              <br />
              <br />
            </p>
            <p className="text-primary/90 dark:text-primary items-center text-center text-lg font-bold">
              Psssst...{" "}
              <span className="text-destructive font-extrabold">
                [Sign In Up Top]{" "}
              </span>
              to access hidden links & see my authentication integration!
            </p>
          </div>
        </section>

        {/* Tech badges */}
        <section className="container mx-auto mt-10 max-w-5xl">
          <h3 className="text-primary mt-4 text-xl font-bold">
            Dev Showcase -
          </h3>
          <p className="text-muted-foreground mb-3 max-w-xl text-base leading-relaxed">
            Here&apos;s some of the tech involved with making this site:
          </p>
          <div className="flex flex-wrap items-center justify-center space-x-4">
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
                  alt="NextJS logo"
                  width={120}
                  height={120}
                  className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>NextJS</p>
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
          </div>
        </section>

        {/* Latest Post */}
        {/* <section className="mx-auto mt-12 max-w-3xl">
      <LatestPost />
    </section> */}
      </main>
    </HydrateClient>
  );
}
