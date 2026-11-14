import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRightIcon, DownloadIcon, GithubIcon, PinIcon } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-page px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
      <Reveal>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          {profile.availability}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {profile.name}
          <span className="block text-muted">{profile.role}.</span>
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{profile.headline}</p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            View projects <ArrowUpRightIcon />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <DownloadIcon /> Download CV
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon /> {profile.github}
          </a>
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
          <PinIcon /> {profile.location}
        </p>
      </Reveal>
    </section>
  );
}
