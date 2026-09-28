import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import portrait from "@/assets/portrait.jpg";
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
      <header className="sticky top-0 z-20 -mx-6 flex items-center justify-between border-b border-border/60 bg-background/80 px-6 py-3 backdrop-blur-xl">
        <span className="flex items-center gap-2.5">
          <Image
            src={portrait}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover object-[50%_18%]"
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {c.hero.name}
          </span>
        </span>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#projects" className="transition-colors hover:text-foreground">
            {c.nav.projects}
          </a>
          <a
            href="#experience"
            className="hidden transition-colors hover:text-foreground sm:block"
          >
            {c.nav.experience}
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

      <section className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5 text-xs font-medium text-muted ring-1 ring-border/60">
            <span className="relative flex h-2 w-2">
              <span
                aria-hidden
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60"
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {c.hero.available}
          </span>

          <div>
            <p className="text-lg text-muted">{c.hero.greeting}</p>
            <h1 className="mt-1 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {c.hero.name}
            </h1>
            <p className="mt-3 text-2xl font-medium text-accent sm:text-3xl">
              {c.hero.role}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {c.hero.specialty.map((s) => (
              <li
                key={s}
                className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted ring-1 ring-border/60"
              >
                {s}
              </li>
            ))}
          </ul>

          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {c.hero.tagline}
          </p>

          <div className="mt-3 flex flex-wrap gap-4">
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
        </div>

        <div className="relative order-first mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:order-none lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl"
          />
          <Image
            src={portrait}
            alt={c.hero.portraitAlt}
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 260px"
            className="w-full rounded-[2rem] bg-card object-cover shadow-2xl ring-1 ring-border/60"
          />
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
            <ProjectCard
              key={p.name}
              project={p}
              wide={i === 0 || i === c.projects.items.length - 1}
            />
          ))}
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 py-16">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {c.experience.title}
        </h2>
        <div className="mt-10 space-y-6">
          {c.experience.items.map((job) => (
            <article
              key={job.role}
              className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/60"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="font-medium text-accent">{job.org}</p>
                </div>
                <p className="text-sm text-muted sm:text-right">
                  {job.period}
                  <span className="block">{job.location}</span>
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span aria-hidden className="text-accent">
                      —
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
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
        <div className="mt-10 flex max-w-3xl flex-col gap-1 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
              {c.education.title}
            </h3>
            <p className="mt-1 font-semibold">{c.education.school}</p>
            <p className="text-muted">{c.education.degree}</p>
          </div>
          <div className="text-sm text-muted sm:text-right">
            <p>{c.education.period}</p>
            <p>{c.education.note}</p>
          </div>
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
              href={c.contact.telegram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              {c.contact.telegramLabel}
            </a>
            <a
              href={c.contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              {c.contact.githubLabel}
            </a>
            <a
              href={`tel:${c.contact.phone.replace(/\s/g, "")}`}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              {c.contact.phoneLabel} · {c.contact.phone}
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
  wide = false,
}: {
  project: Project;
  wide?: boolean;
}) {
  const [primary, ...secondary] = project.links ?? [];

  return (
    <article
      className={`group relative flex flex-col rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/60 transition duration-300 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-accent ${
        primary ? "hover:-translate-y-1 hover:shadow-xl hover:ring-accent/40" : ""
      } ${wide ? "md:col-span-2" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-1 font-medium text-accent">{project.tagline}</p>
        </div>
        {project.status && (
          <span className="shrink-0 rounded-full bg-background px-3 py-1 text-xs font-medium text-muted ring-1 ring-border/60">
            {project.status}
          </span>
        )}
      </div>

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

      {primary && (
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
          <a
            href={primary.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-accent outline-none after:absolute after:inset-0 after:rounded-3xl"
          >
            {primary.label}
            <span
              aria-hidden
              className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          {secondary.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
