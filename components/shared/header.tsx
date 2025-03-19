"use client";

import { useEffect, useState } from "react";
import { Menu, UserPlus, Users, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { Logo } from "./logo";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";

const navLinks = [
  { name: "Features", href: "#features", icon: null },
  { name: "How it Works", href: "#how-it-works", icon: null },
  { name: "FAQs", href: "#faq", icon: null },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      if (prev) {
        // Adding scroll to the body
        document.body.style.overflow = "scroll";
        return false;
      } else {
        // Hiding scroll
        document.body.style.overflow = "hidden";
        return true;
      }
    });
    // document.body.style.overflow
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 ",
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="lg:container mx-auto w-full">
        <nav className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="px-3 py-2 text-sm rounded-md transition-colors hover:text-primary flex items-center"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex items-center space-x-4 ">
            <Link
              href={"/sign-in"}
              className="flex items-center gap-x-1.5 transition-colors rounded-[5px] px-4 py-1.5 text-sm bg-primary text-white hover:bg-primary/80 "
            >
              <Users className="w-4 h-4" />
              <span>Sign In</span>
            </Link>

            <Link
              href={"/sign-up"}
              className="flex items-center gap-x-1.5 transition-colors rounded-[5px] px-4 py-1.5 text-sm text-black border hover:bg-neutral-200"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {/* TODO Use shadcn Sheet component, and extract it into its own component */}
        <div
          className={cn(
            "absolute w-screen  h-screen inset-0 top-[65px] z-50 bg-white dark:bg-gray-950 md:hidden transform transition-transform duration-300 ease-in-out",
            mobileMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          )}
        >
          <div className="p-6 space-y-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className=" py-2 text-lg transition-colors hover:text-primary flex items-center"
                    onClick={toggleMobileMenu}
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
              <Link
                href={"/sign-in"}
                className="flex  text-centeritems-center gap-x-1.5 transition-colors rounded-[5px] px-4 py-1.5 text-sm bg-primary text-white hover:bg-primary/80 "
              >
                <Users className="w-4 h-4" />
                <span>Sign In</span>
              </Link>

              <Link
                href={"/sign-up"}
                className="flex text-center items-center gap-x-1.5 transition-colors rounded-[5px] px-4 py-1.5 text-sm text-black border hover:bg-neutral-200"
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// function SignInDropDown() {
//   return (
//     <DropdownMenu>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline" className="flex items-center gap-2 h-8">
//             <LogIn className="h-4 w-4" />
//             <span>Sign In</span>
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="center" className="w-40">
//           <DropdownMenuItem asChild className="cursor-pointer py-2">
//             <Link href="/organizer-login" className="flex items-center gap-2">
//               <User className="h-4 w-4" />
//               <span>User Login</span>
//             </Link>
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem asChild className="cursor-pointer py-2">
//             <Link href="/organizer-login" className="flex items-center gap-2">
//               <Users className="h-4 w-4" />
//               <span>Organizer Login</span>
//             </Link>
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </DropdownMenu>
//   );
// }
