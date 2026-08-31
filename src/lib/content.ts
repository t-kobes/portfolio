export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
}

export interface Content {
  meta: { title: string; description: string };
  nav: { projects: string; skills: string; about: string; contact: string };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    cta: string;
    ctaSecondary: string;
  };
  projects: { title: string; subtitle: string; items: Project[] };
  skills: { title: string; groups: { label: string; items: string[] }[] };
  about: { title: string; paragraphs: string[] };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    emailLabel: string;
    github: string;
    githubLabel: string;
  };
  footer: string;
}

const email = "tverkgvorov@gmail.com";
const github = "https://github.com/kobestamerlan"; // TODO: подставить реальный ник на GitHub

export const content: Record<Locale, Content> = {
  ru: {
    meta: {
      title: "Тамерлан Кобес — разработчик",
      description:
        "Портфолио Тамерлана Кобеса: full-stack разработчик и студент. CareerVerse, Kaspi Seller Mini-App и другие проекты.",
    },
    nav: {
      projects: "Проекты",
      skills: "Стек",
      about: "Обо мне",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, я",
      name: "Тамерлан Кобес",
      role: "Full-stack разработчик · студент",
      tagline:
        "Делаю продукты от базы данных до интерфейса: продуманная архитектура, чистый код и внимание к деталям.",
      cta: "Смотреть проекты",
      ctaSecondary: "Написать мне",
    },
    projects: {
      title: "Проекты",
      subtitle: "То, что я построил своими руками — от схемы данных до деплоя.",
      items: [
        {
          name: "CareerVerse",
          tagline: "Геймифицированная платформа развития карьеры",
          description:
            "Платформа, где пользователь прокачивает профессию как персонажа в игре: уровни, XP, монеты и адаптивные тесты. Полный цикл — от схемы базы данных до продакшена на Vercel.",
          highlights: [
            "Защита начисления наград от race conditions через интерактивные транзакции Prisma",
            "Дашборд без N+1 — единый агрегирующий запрос",
            "Авторизация через Supabase JWT, стриминг результатов по SSE",
          ],
          stack: ["NestJS", "Prisma", "PostgreSQL", "Supabase", "Next.js", "Vercel"],
        },
        {
          name: "Kaspi Seller Mini-App",
          tagline: "Telegram Mini App для продавцов Kaspi",
          description:
            "Мини-приложение внутри Telegram, помогающее продавцам маркетплейса Kaspi считать маржу и вести учёт товаров — быстрый интерфейс прямо в мессенджере.",
          highlights: [
            "Интеграция с Telegram WebApp SDK",
            "Расчёт маржи с покрытием юнит-тестами",
            "React 19 + Vite: мгновенная загрузка на мобильных",
          ],
          stack: ["React 19", "TypeScript", "Vite", "Telegram WebApp SDK"],
        },
      ],
    },
    skills: {
      title: "Стек",
      groups: [
        { label: "Языки", items: ["TypeScript", "JavaScript", "SQL"] },
        {
          label: "Frontend",
          items: ["React", "Next.js", "Tailwind CSS", "Vite"],
        },
        {
          label: "Backend",
          items: ["NestJS", "Node.js", "Prisma", "PostgreSQL", "Supabase"],
        },
        { label: "Инструменты", items: ["Git", "Vercel", "ESLint", "Claude Code"] },
      ],
    },
    about: {
      title: "Обо мне",
      paragraphs: [
        "Я студент и разработчик. Учусь и параллельно строю настоящие продукты: не учебные задачки, а системы с базой данных, авторизацией, транзакциями и деплоем в продакшен.",
        "Мне интересна архитектура: как защитить бизнес-логику от гонок, как убрать лишние запросы к базе, как сделать интерфейс, которым приятно пользоваться. Ищу стажировку или позицию, где смогу расти рядом с сильной командой.",
      ],
    },
    contact: {
      title: "Контакты",
      subtitle: "Открыт к предложениям о стажировке и работе.",
      email,
      emailLabel: "Почта",
      github,
      githubLabel: "GitHub",
    },
    footer: "Тамерлан Кобес",
  },
  en: {
    meta: {
      title: "Tamerlan Kobes — Developer",
      description:
        "Portfolio of Tamerlan Kobes: full-stack developer and student. CareerVerse, Kaspi Seller Mini-App and other projects.",
    },
    nav: {
      projects: "Projects",
      skills: "Stack",
      about: "About",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Tamerlan Kobes",
      role: "Full-stack developer · student",
      tagline:
        "I build products end to end — from the database to the interface — with solid architecture, clean code and attention to detail.",
      cta: "View projects",
      ctaSecondary: "Get in touch",
    },
    projects: {
      title: "Projects",
      subtitle: "Things I built myself — from data schema to deployment.",
      items: [
        {
          name: "CareerVerse",
          tagline: "Gamified career development platform",
          description:
            "A platform where users level up a profession like a game character: levels, XP, coins and adaptive tests. Full cycle — from database schema to production on Vercel.",
          highlights: [
            "Reward accrual protected from race conditions with Prisma interactive transactions",
            "N+1-free dashboard via a single aggregated query",
            "Supabase JWT auth, result streaming over SSE",
          ],
          stack: ["NestJS", "Prisma", "PostgreSQL", "Supabase", "Next.js", "Vercel"],
        },
        {
          name: "Kaspi Seller Mini-App",
          tagline: "Telegram Mini App for Kaspi marketplace sellers",
          description:
            "A mini app inside Telegram that helps Kaspi marketplace sellers calculate margins and track inventory — a fast interface right in the messenger.",
          highlights: [
            "Telegram WebApp SDK integration",
            "Margin calculation covered by unit tests",
            "React 19 + Vite: instant load on mobile",
          ],
          stack: ["React 19", "TypeScript", "Vite", "Telegram WebApp SDK"],
        },
      ],
    },
    skills: {
      title: "Stack",
      groups: [
        { label: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
        {
          label: "Frontend",
          items: ["React", "Next.js", "Tailwind CSS", "Vite"],
        },
        {
          label: "Backend",
          items: ["NestJS", "Node.js", "Prisma", "PostgreSQL", "Supabase"],
        },
        { label: "Tools", items: ["Git", "Vercel", "ESLint", "Claude Code"] },
      ],
    },
    about: {
      title: "About",
      paragraphs: [
        "I'm a student and a developer. While studying, I build real products — not toy exercises, but systems with databases, auth, transactions and production deployments.",
        "I care about architecture: protecting business logic from race conditions, eliminating redundant database queries, crafting interfaces people enjoy using. Looking for an internship or a role where I can grow alongside a strong team.",
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Open to internship and job opportunities.",
      email,
      emailLabel: "Email",
      github,
      githubLabel: "GitHub",
    },
    footer: "Tamerlan Kobes",
  },
};
