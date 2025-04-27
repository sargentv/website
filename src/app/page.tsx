import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Social media links with their respective icons
  const socialLinks = [
    { href: "https://twitter.com/cybersecurity-alex", label: "Twitter", icon: "https://ext.same-assets.com/2415124296/3783633550.svg" },
    { href: "https://www.linkedin.com/in/alex-johnson-cyber", label: "LinkedIn", icon: "https://ext.same-assets.com/2415124296/2563901416.svg" },
    { href: "https://github.com/alexjohnson-security", label: "GitHub", icon: "https://ext.same-assets.com/2415124296/548389142.svg" },
    { href: "https://www.youtube.com/@alexjohnson-security", label: "YouTube", icon: "https://ext.same-assets.com/2415124296/260646423.svg" },
  ];

  return (
    <section className="container centered">
      <div className="about">
        <div className="mb-6 overflow-hidden rounded-full border-4 border-accent/20 w-40 h-40">
          <Image
            src="https://ext.same-assets.com/2415124296/2864693372.jpeg"
            alt="Vinit Nirwane Profile"
            width={160}
            height={160}
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <h1>Alex Johnson</h1>
        <h2>Cybersecurity Professional</h2>
        <ul className="flex gap-4">
          {socialLinks.map((link) => (
            <li key={link.label} className="list-none">
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-2xl text-foreground hover:text-accent transition-colors"
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
