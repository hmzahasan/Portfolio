import { skillGroups } from "@/data/skills";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-page px-5 py-20 sm:px-8">
      <SectionHeading index="02" title="Skills" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <div className="h-full rounded-xl border border-line bg-card p-6">
              <h3 className="mb-4 font-mono text-sm text-accent">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
