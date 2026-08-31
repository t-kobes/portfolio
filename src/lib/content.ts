export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
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
  facts: string[];
  projects: { title: string; subtitle: string; items: Project[] };
  skills: { title: string; groups: { label: string; items: string[] }[] };
  about: { title: string; paragraphs: string[] };
  education: {
    title: string;
    school: string;
    degree: string;
    period: string;
    note: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    emailLabel: string;
    github: string;
    githubLabel: string;
    telegram: string;
    telegramLabel: string;
    phone: string;
    phoneLabel: string;
  };
  footer: string;
}

const email = "tverkgvorov@gmail.com";
const github = "https://github.com/Beginner-Tima";
const telegram = "https://t.me/singersh";
const phone = "+7 705 965 6076";

export const content: Record<Locale, Content> = {
  ru: {
    meta: {
      title: "Тамерлан Кобес — разработчик",
      description:
        "Full-stack разработчик из Казахстана. Строю продукты для селлеров маркетплейсов и образовательные платформы: Табыс, CareerVerse, KazTeenCommunity.",
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
      role: "Full-stack разработчик",
      tagline:
        "Строю продукты полного цикла — от архитектуры и базы данных до запуска и первых пользователей. Специализация: serverless-бэкенды, Telegram Mini Apps и AI-интеграции.",
      cta: "Смотреть проекты",
      ctaSecondary: "Написать мне",
    },
    facts: [
      "Табыс — собственный B2B-продукт, запущен и работает",
      "CTO платформы KazTeenCommunity",
      "3 хакатона, лучший результат — AITK: 20 из 72, соло",
      "Волонтёр UNICEF Kazakhstan",
    ],
    projects: {
      title: "Проекты",
      subtitle:
        "Не учебные задачи — работающие системы с пользователями, данными и деплоем в продакшен.",
      items: [
        {
          name: "Табыс",
          tagline: "B2B-платформа для продавцов Kaspi и Wildberries",
          description:
            "Telegram Mini App и бот, которые помогают селлерам находить прибыльные ниши, отслеживать цены конкурентов, считать маржу и генерировать SEO-карточки на русском и казахском. Запущен: радары ниш и цен, юнит-экономика, кабинет продавца.",
          highlights: [
            "Serverless-архитектура на Supabase Edge Functions — без постоянного сервера",
            "Авторизация: HMAC-проверка Telegram initData → JWT → Row Level Security",
            "Ежедневные сборщики рыночных данных по расписанию и алерты о ценах в Telegram",
            "Двуязычная генерация SEO-контента через Gemini",
          ],
          stack: [
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Edge Functions",
            "Telegram Mini Apps",
            "React 19",
            "Gemini API",
          ],
        },
        {
          name: "CareerVerse",
          tagline: "Геймифицированная платформа развития карьеры",
          description:
            "Пользователь прокачивает профессию как персонажа в игре: уровни, XP, монеты, адаптивные тесты. Полный цикл — от схемы данных до продакшена на Vercel.",
          highlights: [
            "Начисление наград защищено от race conditions интерактивными транзакциями Prisma",
            "Дашборд без N+1 — единый агрегирующий запрос",
            "Авторизация через Supabase JWT, стриминг результатов по SSE",
          ],
          stack: ["NestJS", "Prisma", "PostgreSQL", "Supabase", "Next.js", "Vercel"],
          link: "https://github.com/Beginner-Tima/CareerVerse",
          linkLabel: "Код на GitHub",
        },
        {
          name: "KazTeenCommunity",
          tagline: "Платформа профориентации для подростков Казахстана · CTO",
          description:
            "Подбор университетов и хобби, дневник поступления, база вузов и грантов, ИИ-анализ профиля. Отвечаю за техническую часть платформы как CTO.",
          highlights: [
            "ИИ-инструменты: профориентация, подбор вуза и хобби",
            "Supabase Auth и Edge Functions, обращения в поддержку через email и Telegram",
            "Интерфейс на shadcn/ui с TanStack Query и Framer Motion",
          ],
          stack: [
            "React 18",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "shadcn/ui",
            "Supabase",
          ],
        },
      ],
    },
    skills: {
      title: "Стек",
      groups: [
        { label: "Языки", items: ["TypeScript", "JavaScript", "SQL"] },
        {
          label: "Frontend",
          items: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui"],
        },
        {
          label: "Backend",
          items: [
            "Supabase",
            "PostgreSQL",
            "NestJS",
            "Prisma",
            "Edge Functions",
            "Node.js",
          ],
        },
        {
          label: "Инструменты",
          items: ["Telegram Bot API", "Gemini API", "n8n", "Docker", "Git", "Vercel"],
        },
      ],
    },
    about: {
      title: "Обо мне",
      paragraphs: [
        "Студент Digital College и разработчик из Казахстана. Параллельно с учёбой строю и запускаю настоящие продукты: с базами данных, авторизацией, платёжной логикой и живыми пользователями — а не учебные примеры.",
        "Мне важно, как система устроена под капотом: защита бизнес-логики от гонок, безопасность на уровне базы данных, архитектура без лишних затрат. Помимо кода — опыт роли CTO в командном проекте и волонтёрство в UNICEF Kazakhstan. Открыт к стажировкам и интересным задачам.",
      ],
    },
    education: {
      title: "Образование",
      school: "Digital College Almaty",
      degree: "Software Engineering",
      period: "2025 — 2029",
      note: "2-й курс · повышенная стипендия",
    },
    contact: {
      title: "Контакты",
      subtitle: "Открыт к предложениям о стажировке и работе.",
      email,
      emailLabel: "Почта",
      github,
      githubLabel: "GitHub",
      telegram,
      telegramLabel: "Telegram · @singersh",
      phone,
      phoneLabel: "Телефон",
    },
    footer: "Тамерлан Кобес",
  },
  en: {
    meta: {
      title: "Tamerlan Kobes — Developer",
      description:
        "Full-stack developer from Kazakhstan. Building products for marketplace sellers and education platforms: Tabys, CareerVerse, KazTeenCommunity.",
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
      role: "Full-stack developer",
      tagline:
        "I build products end to end — from architecture and database to launch and first users. Focus areas: serverless backends, Telegram Mini Apps and AI integrations.",
      cta: "View projects",
      ctaSecondary: "Get in touch",
    },
    facts: [
      "Tabys — my own B2B product, launched and running",
      "CTO of the KazTeenCommunity platform",
      "3 hackathons, best result — AITK: 20th of 72, solo",
      "UNICEF Kazakhstan volunteer",
    ],
    projects: {
      title: "Projects",
      subtitle:
        "Not coursework — working systems with users, data and production deployments.",
      items: [
        {
          name: "Tabys",
          tagline: "B2B platform for Kaspi and Wildberries sellers",
          description:
            "A Telegram Mini App and bot that help marketplace sellers find profitable niches, track competitor prices, calculate margins and generate SEO listings in Russian and Kazakh. Live: niche and price radars, unit economics, seller dashboard.",
          highlights: [
            "Serverless architecture on Supabase Edge Functions — no always-on server",
            "Auth: HMAC verification of Telegram initData → JWT → Row Level Security",
            "Scheduled daily market-data collectors and price alerts in Telegram",
            "Bilingual SEO content generation with Gemini",
          ],
          stack: [
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Edge Functions",
            "Telegram Mini Apps",
            "React 19",
            "Gemini API",
          ],
        },
        {
          name: "CareerVerse",
          tagline: "Gamified career development platform",
          description:
            "Users level up a profession like a game character: levels, XP, coins, adaptive tests. Full cycle — from data schema to production on Vercel.",
          highlights: [
            "Reward accrual protected from race conditions with Prisma interactive transactions",
            "N+1-free dashboard via a single aggregated query",
            "Supabase JWT auth, result streaming over SSE",
          ],
          stack: ["NestJS", "Prisma", "PostgreSQL", "Supabase", "Next.js", "Vercel"],
          link: "https://github.com/Beginner-Tima/CareerVerse",
          linkLabel: "Code on GitHub",
        },
        {
          name: "KazTeenCommunity",
          tagline: "Career guidance platform for teenagers in Kazakhstan · CTO",
          description:
            "University and hobby matching, an admission diary, a database of universities and grants, AI profile analysis. I own the technical side of the platform as CTO.",
          highlights: [
            "AI tools: career guidance, university and hobby matching",
            "Supabase Auth and Edge Functions, support requests via email and Telegram",
            "UI built with shadcn/ui, TanStack Query and Framer Motion",
          ],
          stack: [
            "React 18",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "shadcn/ui",
            "Supabase",
          ],
        },
      ],
    },
    skills: {
      title: "Stack",
      groups: [
        { label: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
        {
          label: "Frontend",
          items: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui"],
        },
        {
          label: "Backend",
          items: [
            "Supabase",
            "PostgreSQL",
            "NestJS",
            "Prisma",
            "Edge Functions",
            "Node.js",
          ],
        },
        {
          label: "Tools",
          items: ["Telegram Bot API", "Gemini API", "n8n", "Docker", "Git", "Vercel"],
        },
      ],
    },
    about: {
      title: "About",
      paragraphs: [
        "A Digital College student and developer from Kazakhstan. Alongside my studies I build and ship real products — with databases, auth, payment logic and live users, not textbook exercises.",
        "I care about how a system works under the hood: protecting business logic from race conditions, database-level security, architecture without unnecessary overhead. Beyond code — experience as CTO on a team project and volunteering with UNICEF Kazakhstan. Open to internships and interesting challenges.",
      ],
    },
    education: {
      title: "Education",
      school: "Digital College Almaty",
      degree: "Software Engineering",
      period: "2025 — 2029",
      note: "2nd year · merit scholarship",
    },
    contact: {
      title: "Contact",
      subtitle: "Open to internship and job opportunities.",
      email,
      emailLabel: "Email",
      github,
      githubLabel: "GitHub",
      telegram,
      telegramLabel: "Telegram · @singersh",
      phone,
      phoneLabel: "Phone",
    },
    footer: "Tamerlan Kobes",
  },
};
