import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { GithubIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <MailIcon />,
    },
    {
      label: "GitHub",
      value: `github.com/${profile.github}`,
      href: profile.githubUrl,
      icon: <GithubIcon />,
    },
    ...(profile.phone
      ? [
          {
            label: "Phone",
            value: profile.phone,
            href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
            icon: <PhoneIcon />,
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="mx-auto max-w-page px-5 py-20 sm:px-8">
      <SectionHeading index="06" title="Contact" />
      <Reveal>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Kisi opportunity, project ya collaboration ke liye baat karni ho to mujhse rabta karein.
          Main jaldi jawab deta hoon.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-line bg-card px-5 py-4 transition-colors hover:border-accent"
              >
                <span className="text-accent">{link.icon}</span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                    {link.label}
                  </span>
                  <span className="block truncate text-sm">{link.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
          <PinIcon /> {profile.location}
        </p>
      </Reveal>
    </section>
  );
}
