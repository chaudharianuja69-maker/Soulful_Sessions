"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/utils/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Soulful Sessions — A safe space for your inner world"
              width={180}
              height={72}
              className="h-14 w-auto object-contain transition-transform group-hover:scale-[1.02] md:h-16"
              priority
            />
            <div className="hidden sm:block">
              <p className="font-heading text-lg font-bold leading-tight text-dark-text md:text-xl">
                Soulful Sessions
              </p>
              <p className="text-xs italic text-gray-text">
                A safe space for your inner world
              </p>
            </div>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary"
                      : "text-dark-text hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[300px] flex-col bg-white p-6 shadow-2xl md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <p className="font-heading text-lg font-bold">Menu</p>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-secondary text-primary"
                          : "text-dark-text hover:bg-secondary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
