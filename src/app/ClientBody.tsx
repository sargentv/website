"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Effect for setting initial theme
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  // Navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/certifications", label: "Certifications" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // Social media links
  const socialLinks = [
    { href: "https://twitter.com/cybersecurity-alex", label: "Twitter", icon: "0.svg" },
    { href: "https://www.linkedin.com/in/alex-johnson-cyber", label: "LinkedIn", icon: "1.svg" },
    { href: "https://github.com/alexjohnson-security", label: "GitHub", icon: "2.svg" },
    { href: "https://www.youtube.com/@alexjohnson-security", label: "YouTube", icon: "3.svg" },
  ];

  return (
    <body className="antialiased" suppressHydrationWarning>
      <div className="wrapper">
        <nav className="navigation">
          <div className="container">
            <div className="flex justify-between items-center">
              <Link href="/" className="navigation-title">
                Alex Johnson
              </Link>

              <button
                className="md:hidden text-foreground"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className={`${isMenuOpen ? 'fixed inset-0 z-50 bg-background p-4 pt-16 md:static md:p-0 md:bg-transparent' : 'hidden'} md:flex`}>
                {isMenuOpen && (
                  <button
                    className="absolute top-4 right-4 md:hidden text-foreground"
                    aria-label="Close menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X size={24} />
                  </button>
                )}

                <ul className={`navigation-list ${isMenuOpen ? 'flex-col space-y-4' : ''}`}>
                  {navLinks.map((link) => (
                    <li key={link.href} className="navigation-item">
                      <Link
                        href={link.href}
                        className={`navigation-link ${pathname === link.href ? 'text-accent' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="navigation-item separator">
                    <span>|</span>
                  </li>
                  <li>
                    <button
                      className="text-foreground hover:text-accent transition-colors"
                      aria-label="Toggle theme"
                      onClick={toggleTheme}
                    >
                      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="content">
          {children}
        </div>

        <footer className="footer">
          <div className="container">
            <div className="text-center text-muted-foreground text-sm">
              © 2025 Alex Johnson ·
              <span className="ml-1">Cybersecurity Professional</span>
            </div>
          </div>
        </footer>
      </div>
    </body>
  );
}
