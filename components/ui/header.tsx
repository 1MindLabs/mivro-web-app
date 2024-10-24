import { ReactNode, forwardRef, ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import DarkModeToggle from "./darkmode-toggle";
import AuthButton from "./authbutton";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import { redirect } from "next/navigation";
import Navigation from "./navLink";
import Search from "./search";
import AnalysisLogo from "@/public/images/analysis.png";
import { createClient } from "@/utils/supabase/server";

const DropdownNavItem = ({
  trigger,
  children,
}: {
  trigger: string;
  children: ReactNode;
}) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
    <NavigationMenuContent>{children}</NavigationMenuContent>
  </NavigationMenuItem>
);

const ListItem = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground focus:bg-secondary-300/10 focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

const HeroTitle = ({ theme }: { theme: string }) => (
  <>
    <div className="hidden items-start sm:inline-block">
      {theme === "dark" ? (
        <Image
          src={AnalysisLogo}
          width={35}
          alt="Mivro Logo"
          className="mb-1 mr-2 inline-flex"
        />
      ) : (
        <Image
          src={AnalysisLogo}
          width={35}
          alt="Mivro Logo"
          className="mb-1 mr-2 inline-flex"
        />
      )}
    </div>

    <div className="block items-start sm:hidden">
      <div>
        {theme === "dark" ? (
          <Image
            src={AnalysisLogo}
            width={35}
            alt="Mivro Logo"
            className="mb-1 mr-2 inline-flex"
          />
        ) : (
          <Image
            src={AnalysisLogo}
            width={35}
            alt="Mivro Logo"
            className="mb-1 mr-2 inline-flex"
          />
        )}
      </div>
    </div>
  </>
);

export default async function Header() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 p-3 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-6xl">
        <nav
          className="rounded-full border border-border/50 bg-background shadow-md transition-all duration-300 ease-in-out"
          aria-label="Main navigation"
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center"
                  aria-label="MIVRO Home"
                >
                  <HeroTitle theme="light" />
                  <div className="h4 ml-1">Mivro</div>
                </Link>
                <nav className="ml-6 hidden md:block" aria-label="Main menu">
                  <NavigationMenu>
                    <NavigationMenuList className="space-x-1">
                      <Navigation />
                      <DropdownNavItem trigger="Resources">
                        <ul className="grid w-[400px] gap-3 bg-background p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          <ListItem href="/about" title="About">
                            Learn more about Mivro
                          </ListItem>
                          <ListItem href="/team" title="Team">
                            Know about the people behind Mivro
                          </ListItem>
                          <ListItem
                            href="https://docs.google.com/presentation/d/1mxhh5Z6-F71714eD62kbfIa_T-FQAd3bwUTcZmL84Do/edit?usp=sharing"
                            title="Documentation"
                          >
                            Read insights on Mivro&apos;s development
                          </ListItem>

                          <ListItem href="/changelog" title="Changelog">
                            See what&apos;s new in Mivro
                          </ListItem>
                        </ul>
                      </DropdownNavItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </nav>
              </div>
              <div className="hidden md:block ">
                <Search />
              </div>
              <div className="hidden items-center space-x-4 md:flex">
                <AuthButton />
                <DarkModeToggle />
              </div>
              <div className="md:hidden">
                <MobileMenu user={user} handleSignOut={handleSignOut} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
