import { projects } from "@/data/projects";
import type { Project } from "@/types";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { ArrowUpRightIcon, GithubIcon } from "@/components/ui/Icons";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl border bg-card p-6 transition-colors hover:border-accent ${
        project.featured ? "border-line sm:p-8" : "border-line"
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.kind}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
        {project.points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-2 h-1 w-3 shrink-0 bg-accent" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>

      {(project.repoUrl || project.liveUrl) && (
        <div className="mt-6 flex gap-4 pt-1 text-sm">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-accent"
            >
              <GithubIcon /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-accent"
            >
              Live <ArrowUpRightIcon />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-page px-5 py-20 sm:px-8">
      <SectionHeading index="04" title="Projects" />

      <div className="grid gap-5 lg:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={i * 70} className={i === 0 ? "lg:col-span-2" : ""}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <h3 className="mb-5 mt-14 font-mono text-sm text-muted">More projects</h3>
      <div className="grid gap-5 md:grid-cols-3">
        {others.map((project, i) => (
          <Reveal key={project.title} delay={i * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
