import { education } from "@/data/education";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-page px-5 py-20 sm:px-8">
      <SectionHeading index="05" title="Education" />
      <Reveal>
        <article className="rounded-xl border border-line bg-card p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p className="font-mono text-sm text-muted">{education.period}</p>
          </div>
          <p className="mt-1 text-muted">
            {education.school} <span className="text-accent">· {education.grade}</span>
          </p>

          <p className="mb-3 mt-6 font-mono text-xs uppercase tracking-wider text-muted">
            Key coursework
          </p>
          <ul className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <li key={course}>
                <Tag>{course}</Tag>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </section>
  );
}
