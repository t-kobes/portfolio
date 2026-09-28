export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];

export interface ProjectLink {
  href: string;
  label: string;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  status?: string;
  /** Первая ссылка — основная: по ней открывается вся карточка. */
  links?: ProjectLink[];
}

export interface Content {
  meta: { title: string; description: string };
  nav: {
    projects: string;
    experience: string;
    skills: string;
    about: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    specialty: string[];
    tagline: string;
    cta: string;
    ctaSecondary: string;
    available: string;
    portraitAlt: string;
  };
  facts: string[];
  projects: { title: string; subtitle: string; items: Project[] };
  experience: {
    title: string;
    items: {
      role: string;
      org: string;
      period: string;
      location: string;
      points: string[];
    }[];
  };
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
const github = "https://github.com/t-kobes";
const telegram = "https://t.me/singersh";
const phone = "+7 705 965 6076";

const tabysApp = "https://kaspi-seller-miniapp.vercel.app";
const tabysBot = "https://t.me/kaspi_calc_bot";
const tabysCode = "https://github.com/t-kobes/TabysApp-Saas";
const careerVerseApp = "https://careerverse-web-tau.vercel.app";
const careerVerseCode = "https://github.com/t-kobes/CareerVerse";
const cityPulseCode = "https://github.com/t-kobes/CityPulse_Ai_Hackaton";

export const content: Record<Locale, Content> = {
  ru: {
    meta: {
      title: "Тамерлан Кобес — full-stack разработчик",
      description:
        "Full-stack разработчик на TypeScript из Казахстана. Строю продукты для селлеров маркетплейсов и образовательные платформы: Табыс, CareerVerse, CityPulse AI, KazTeenCommunity.",
    },
    nav: {
      projects: "Проекты",
      experience: "Опыт",
      skills: "Стек",
      about: "Обо мне",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, я",
      name: "Тамерлан Кобес",
      role: "Full-stack разработчик",
      specialty: ["TypeScript", "React · Next.js", "Node.js", "PostgreSQL"],
      tagline:
        "Строю продукты полного цикла — от архитектуры и базы данных до запуска и первых пользователей. Специализация: serverless-бэкенды, Telegram Mini Apps и AI-интеграции.",
      cta: "Смотреть проекты",
      ctaSecondary: "Написать мне",
      available: "Открыт к стажировкам",
      portraitAlt: "Тамерлан Кобес, full-stack разработчик",
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
        "Не учебные задачи — работающие системы с пользователями, данными и деплоем в продакшен. Нажмите на карточку, чтобы открыть проект.",
      items: [
        {
          name: "Табыс",
          tagline: "B2B-платформа для продавцов Kaspi и Wildberries",
          status: "Работает в проде",
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
          links: [
            { href: tabysApp, label: "Открыть приложение" },
            { href: tabysBot, label: "Бот в Telegram" },
            { href: tabysCode, label: "Код на GitHub" },
          ],
        },
        {
          name: "CareerVerse",
          tagline: "Геймифицированная платформа развития карьеры",
          status: "Живое демо",
          description:
            "Пользователь прокачивает профессию как персонажа в игре: уровни, XP, монеты, адаптивные тесты. Полный цикл — от схемы данных до продакшена на Vercel.",
          highlights: [
            "Начисление наград защищено от race conditions интерактивными транзакциями Prisma",
            "Дашборд без N+1 — единый агрегирующий запрос",
            "Авторизация через Supabase JWT, стриминг результатов по SSE",
          ],
          stack: ["NestJS", "Prisma", "PostgreSQL", "Supabase", "Next.js", "Vercel"],
          links: [
            { href: careerVerseApp, label: "Открыть демо" },
            { href: careerVerseCode, label: "Код на GitHub" },
          ],
        },
        {
          name: "CityPulse AI",
          tagline: "Дашборд умного города с ИИ-детекцией аномалий",
          status: "Хакатон",
          description:
            "Мониторинг Алматы в реальном времени: качество воздуха, скорость трафика и состояние системы по районам. ИИ находит аномалии, объясняет их и отвечает на вопросы о метриках города в чате.",
          highlights: [
            "Движок детекции аномалий по порогам PM2.5 и скорости трафика → алерты в AI-диспетчер",
            "ИИ-инсайты и чат-ассистент по метрикам города через Gemini API",
            "Мониторинг по районам Алматы и обновление данных каждые 15 секунд",
          ],
          stack: ["React 19", "TypeScript", "Recharts", "Gemini API", "Node.js"],
          links: [{ href: cityPulseCode, label: "Код на GitHub" }],
        },
        {
          name: "KazTeenCommunity",
          tagline: "Платформа профориентации для подростков Казахстана · CTO",
          status: "CTO",
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
    experience: {
      title: "Опыт",
      items: [
        {
          role: "IT-специалист по интеграции (Integration Junior Specialist)",
          org: "Digital College (KZ)",
          period: "май 2026 — н. в.",
          location: "Алматы",
          points: [
            "Поддержка и интеграция IT-инфраструктуры колледжа в связке с ведущим системным инженером",
            "Развёртывание и настройка ПО, диагностика оборудования, конфигурация локальной сети",
            "Администрирование Windows и Linux, автоматизация рутинных задач обслуживания",
          ],
        },
        {
          role: "Специалист международного отдела",
          org: "Digital College · KazGASA",
          period: "сентябрь 2025 — февраль 2026",
          location: "Алматы",
          points: [
            "Развитие партнёрств с зарубежными университетами, подготовка меморандумов о сотрудничестве",
            "Сопровождение программ академической мобильности и приёма иностранных студентов",
            "Официальная переписка, перевод документов, аналитические отчёты для руководства",
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
      period: "2024 — 2028",
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
      title: "Tamerlan Kobes — full-stack developer",
      description:
        "TypeScript full-stack developer from Kazakhstan. Building products for marketplace sellers and education platforms: Tabys, CareerVerse, CityPulse AI, KazTeenCommunity.",
    },
    nav: {
      projects: "Projects",
      experience: "Experience",
      skills: "Stack",
      about: "About",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Tamerlan Kobes",
      role: "Full-stack developer",
      specialty: ["TypeScript", "React · Next.js", "Node.js", "PostgreSQL"],
      tagline:
        "I build products end to end — from architecture and database to launch and first users. Focus areas: serverless backends, Telegram Mini Apps and AI integrations.",
      cta: "View projects",
      ctaSecondary: "Get in touch",
      available: "Open to internships",
      portraitAlt: "Tamerlan Kobes, full-stack developer",
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
        "Not coursework — working systems with users, data and production deployments. Click a card to open the project.",
      items: [
        {
          name: "Tabys",
          tagline: "B2B platform for Kaspi and Wildberries sellers",
          status: "Live in production",
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
          links: [
            { href: tabysApp, label: "Open the app" },
            { href: tabysBot, label: "Telegram bot" },
            { href: tabysCode, label: "Code on GitHub" },
          ],
        },
        {
          name: "CareerVerse",
          tagline: "Gamified career development platform",
          status: "Live demo",
          description:
            "Users level up a profession like a game character: levels, XP, coins, adaptive tests. Full cycle — from data schema to production on Vercel.",
          highlights: [
            "Reward accrual protected from race conditions with Prisma interactive transactions",
            "N+1-free dashboard via a single aggregated query",
            "Supabase JWT auth, result streaming over SSE",
          ],
          stack: ["NestJS", "Prisma", "PostgreSQL", "Supabase", "Next.js", "Vercel"],
          links: [
            { href: careerVerseApp, label: "Open the demo" },
            { href: careerVerseCode, label: "Code on GitHub" },
          ],
        },
        {
          name: "CityPulse AI",
          tagline: "Smart city dashboard with AI anomaly detection",
          status: "Hackathon",
          description:
            "Real-time monitoring of Almaty: air quality, traffic speed and system health by district. AI detects anomalies, explains them and answers questions about city metrics in a chat.",
          highlights: [
            "Anomaly detection engine on PM2.5 and traffic-speed thresholds → alerts to an AI dispatcher",
            "AI insights and a chat assistant over city metrics via the Gemini API",
            "District-level monitoring across Almaty with data refreshed every 15 seconds",
          ],
          stack: ["React 19", "TypeScript", "Recharts", "Gemini API", "Node.js"],
          links: [{ href: cityPulseCode, label: "Code on GitHub" }],
        },
        {
          name: "KazTeenCommunity",
          tagline: "Career guidance platform for teenagers in Kazakhstan · CTO",
          status: "CTO",
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
    experience: {
      title: "Experience",
      items: [
        {
          role: "Integration Junior Specialist",
          org: "Digital College (KZ)",
          period: "May 2026 — present",
          location: "Almaty",
          points: [
            "Maintain and integrate the college's IT infrastructure alongside the Lead Systems Engineer",
            "Deploy and configure software, troubleshoot hardware, set up the local network",
            "Administer Windows and Linux, automate routine maintenance tasks",
          ],
        },
        {
          role: "International Relations Officer",
          org: "Digital College · KazGASA",
          period: "September 2025 — February 2026",
          location: "Almaty",
          points: [
            "Developed partnerships with international universities, drafted Memorandums of Understanding",
            "Supported academic mobility programs and international student admissions",
            "Official correspondence, document translation, analytical reports for senior leadership",
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
      period: "2024 — 2028",
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
