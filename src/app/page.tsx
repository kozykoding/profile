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
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function Home() {
  //const { user } = await withAuth();
  const hello = await api.post.hello({ text: "from tRPC" });
  //const welcomeMessage = user ? `Welcome ${user.firstName}!` : "Welcome";

  return (
  <HydrateClient>
  <main className="container mx-auto min-h-screen mt-40">
    {/* HERO */}
    <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 ">
      {/* Avatar */}
      <div className="flex justify-center">
        <Image
          src="https://vdakuindv7.ufs.sh/f/11284QhVzXDu37GzIhVceVwxmriZpH7hOYaAFykBblfD2oL5"
          alt="Sammy&apos;s Avatar"
          width={102}
          height={102}
          className="h-30 w-30 rounded-full ring-2 ring-primary/40"
          priority
        />
      </div>

      {/* Title + Intro */}
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center">
          Sammy’s <span className="text-primary">DevOps / Analyst</span> Profile
        </h1>
        <h3 className="mt-4 text-xl text-primary font-bold">
          About Me -
        </h3>
        <p className="mt-2 max-w-3xl">
          In my free time, I&apos;m usually self-learning / practicing DevOps projects 
          with Python, Go, some C, or messing around in NeoVim, and probably playing around with my Arch Linux / Omarchy layout.
          <br />
          <br />
          OR I&apos;m messing around with my homelab testing out projects to run behind my reverse proxy, 
          or expanding my server rack, or running ethernet cable through the attic for PoE cameras, stuff like that.
          <br />
          <br />
        </p>
        <p className="font-bold text-lg text-primary/90 dark:text-primary text-center items-center">
          Psssst... [Sign In Up Top] to see my authentication integration, and to access hidden links, explore snippets of my projects, and more!
        </p>
      </div>
    </section>

    {/* Tech badges */}
    <section className="container mx-auto mt-10 max-w-5xl">
      <h3 className="mt-4 text-xl text-primary font-bold">
        Dev Showcase -
      </h3>
      <p className="mb-3 max-w-xl text-base leading-relaxed text-muted-foreground">
        Here&apos;s some of the tech involved with making this site:
      </p>
      <div className="flex flex-wrap items-center justify-center space-x-4 ">
        <Image
          src={logo}
          alt="Bun logo"
          width={120}
          height={120}
          className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src={reactLogo}
          alt="React logo"
          width={120}
          height={120}
          className="h-20 w-20 animate-[spin_20s_linear_infinite] p-2"
        />
        <Image
          src={ghostty}
          alt="Ghostty logo"
          width={120}
          height={120}
          className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src={archlinux}
          alt="Arch Linux logo"
          width={120}
          height={120}
          className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src={vercel}
          alt="Vercel logo"
          width={120}
          height={120}
          className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src={tailwind}
          alt="Tailwind logo"
          width={120}
          height={120}
          className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
        />
        <Image
          src={nextjs}
          alt="NextJS logo"
          width={120}
          height={120}
          className="h-20 w-20 p-2 transition-transform duration-300 hover:scale-105"
        />
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
