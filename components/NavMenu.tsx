"use client";
import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import {
  getSignInUrl,
  getSignUpUrl,
  signOut,
  withAuth,
} from "@workos-inc/authkit-nextjs";
import { useAuth } from "@workos-inc/authkit-nextjs/components";
import { Button } from "./ui/button";
import { getSignInRedirect, doSignOut } from "~/app/_components/auth";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Users",
    href: "/admin/users",
    description: "Manage users and their permissions.",
  },
  {
    title: "Profile",
    href: "/users/profile",
    description: "Manage your profile and settings.",
  },
  {
    title: "Console",
    href: "/admin",
    description: "SSO & Domain settings.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavMenu() {
  // const { user } = await withAuth();

  const { user } = useAuth();

  // Get the URL to redirect the user to AuthKit to sign up
  //const signUpUrl = await getSignUpUrl();
  //const signInUrl = await getSignInUrl();

  return (
    <div className="mx-auto flex w-full">
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Admin</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          
          {user && 
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Data Analytics</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/data">
                      <div className="font-medium">Visualization</div>
                      <div className="text-muted-foreground">
                        Small example of data visuals.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  {/*<NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Documentation</div>
                      <div className="text-muted-foreground">
                        Learn how to use the library.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Blog</div>
                      <div className="text-muted-foreground">
                        Read our latest blog posts.
                      </div>
                    </Link>
                  </NavigationMenuLink>*/}
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          }
          {user &&
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Authentication</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/users/profile">User Profile</Link>
                  </NavigationMenuLink>
                  
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          } 
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/resume">Resume</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/*<NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2">
                      <CircleHelpIcon />
                      Backlog
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2">
                      <CircleIcon />
                      To Do
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2">
                      <CircleCheckIcon />
                      Done
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>*/}
          {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          {user ? (
              <>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                    // redirect('/');
                  }}
                >
                  <Button variant="ghost" size="sm">Sign Out</Button>
                </form>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href={signInUrl}>Sign In</Link>
                </Button>
              </>
            )}
          </NavigationMenuLink>
        </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              {user ? (
                <form action={doSignOut}>
                  <Button variant="ghost" size="sm" type="submit">
                    Sign Out
                  </Button>
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={async () => {
                    try {
                      const url = await getSignInRedirect();
                      if (url) window.location.href = url;
                    } catch (e) {
                      console.error("Failed to get sign-in URL", e);
                    }
                  }}
                >
                  Sign In
                </Button>
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>{" "}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
