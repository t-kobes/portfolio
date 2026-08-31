import Link from "next/link";
import { notFound } from "next/navigation";
import { content, locales, type Locale, type Project } from "@/lib/content";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  const c = content[lang as Locale];
  const otherLang: Locale = lang === "ru" ? "en" : "ru";

  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <header className="sticky top-0 z-10 -mx-6 flex items-center justify-between border-b border-border/60 bg-background/80 px-6 py-4 backdrop-blur-xl">
        <span className="text-sm font-semibold tracking-tight">
          {c.hero.name}
        </span>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#projects" className="transition-colors hover:text-foreground">
            {c.nav.projects}
          </a>
          <a href="#skills" className="hidden transition-colors hover:text-foreground sm:block">
            {c.nav.skills}
          </a>
          <a href="#about" className="hidden transition-colors hover:text-foreground sm:block">
            {c.nav.about}
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            {c.nav.contact}
          </a>
          <Link
            href={`/${otherLang}`}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase transition-colors hover:border-foreground"
          >
            {otherLang}
          </Link>
        </nav>
      </header>

      <section className="flex flex-col items-start gap-6 py-24 sm:py-32">
        <p className="text-lg text-muted">{c.hero.greeting}</p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          {c.hero.name}
        </h1>
        <p className="text-2xl font-medium text-accent sm:text-3xl">
          {c.hero.role}
        </p>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {c.hero.tagline}
        </p>
        <div className="mt-4 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {c.hero.cta}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
          >
            {c.hero.ctaSecondary}
          </a>
        </div>
      </section>

      <section aria-label="facts" className="pb-8">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.facts.map((f) => (
            <li
              key={f}
              className="rounded-2xl bg-card px-5 py-4 text-sm leading-snug shadow-sm ring-1 ring-border/60"
            >
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="scroll-mt-20 py-16">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {c.projects.title}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">{c.projects.subtitle}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {c.projects.items.map((p, i) => (
            <ProjectCard key={p.name} project={p} featured={i === 0} />
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 py-16">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {c.skills.title}
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {c.skills.groups.map((g) => (
            <div key={g.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {g.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-card px-3 py-1.5 text-sm shadow-sm ring-1 ring-border/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-20 py-16">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {c.about.title}
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          {c.about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 py-16 pb-24">
        <div className="rounded-3xl bg-card p-10 shadow-sm ring-1 ring-border/60 sm:p-14">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {c.contact.title}
          </h2>
          <p className="mt-3 text-lg text-muted">{c.contact.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${c.contact.email}`}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {c.contact.emailLabel} · {c.contact.email}
            </a>
            <a
              href={c.contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              {c.contact.githubLabel}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8 text-sm text-muted">
        © {new Date().getFullYear()} {c.footer}
      </footer>
    </div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-md ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-1 font-medium text-accent">{project.tagline}</p>
      <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span aria-hidden className="text-accent">
              —
            </span>
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2 pt-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full bg-background px-3 py-1 text-xs font-medium ring-1 ring-border/60"
          >
            {s}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 text-sm font-medium text-accent hover:underline"
        >
          {project.linkLabel} →
        </a>
      )}
    </article>
  );
}
