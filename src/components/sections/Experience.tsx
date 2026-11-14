import { experience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-page px-5 py-20 sm:px-8">
      <SectionHeading index="03" title="Experience" />
      <div className="space-y-6">
        {experience.map((job) => (
          <Reveal key={`${job.company}-${job.period}`}>
            <article className="rounded-xl border border-line bg-card p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-xl font-semibold">
                  {job.role} <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="font-mono text-sm text-muted">{job.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted">{job.location}</p>

              <ul className="mt-5 space-y-3 leading-relaxed text-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
