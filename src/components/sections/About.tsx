import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-page px-5 py-20 sm:px-8">
      <SectionHeading index="01" title="About" />
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="space-y-5 leading-relaxed text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="bg-card px-6 py-5">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-accent">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
