"use client";

import Link from "next/link";
import { BrainCircuit, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#cv", label: "CV" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="#" className="mr-6 flex items-center gap-2" prefetch={false}>
          <BrainCircuit className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">Alex Hartman</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-end gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                <BrainCircuit className="h-6 w-6 text-primary" />
                <span className="sr-only">Alex Hartman</span>
              </Link>
              {navLinks.map((link) => (
                 <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground" prefetch={false}>
                    {link.label}
                 </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
