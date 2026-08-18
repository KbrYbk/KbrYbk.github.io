import { reactive } from 'vue';

type Language = 'ru' | 'en';

interface Translations {
  [key: string]: {
    ru: string;
    en: string;
  };
}

const state = reactive({
  lang: 'ru' as Language
});

const translations: Translations = {
  nav_about: { ru: 'Обо мне', en: 'About' },
  nav_skills: { ru: 'Навыки', en: 'Skills' },
  nav_projects: { ru: 'Проекты', en: 'Projects' },
  nav_contact: { ru: 'Контакты', en: 'Contact' },
  
  hero_greeting: { ru: 'Привет, я', en: "Hi, I'm" },
  hero_name: { ru: 'KbrYbk', en: 'KbrYbk' },
  hero_role: { ru: 'Я Frontend Developer.', en: 'I am a Frontend Developer.' },
  hero_desc: { 
    ru: 'Меня зовут Илья. Я специализируюсь на создании современных, быстрых и удобных веб-интерфейсов. Люблю превращать сложные задачи в элегантные решения, используя передовые технологии.', 
    en: 'My name is Ilya. I specialize in building modern, fast, and user-friendly web interfaces. I love turning complex problems into elegant solutions using cutting-edge technologies.' 
  },
  hero_btn_projects: { ru: 'Посмотреть работы', en: 'View Work' },
  hero_btn_contact: { ru: 'Связаться со мной', en: 'Contact Me' },
  
  skills_title: { ru: 'Навыки и Технологии', en: 'Skills & Technologies' },
  skills_cat_frontend: { ru: 'Frontend & UI/UX', en: 'Frontend & UI/UX' },
  skills_cat_backend: { ru: 'Backend & API', en: 'Backend & API' },
  skills_cat_devops: { ru: 'DevOps & Серверы', en: 'DevOps & Server Administration' },
  skills_cat_core: { ru: 'Ключевые компетенции', en: 'Core Competencies' },
  
  projects_title: { ru: 'Мои Проекты', en: 'My Projects' },
  projects_github: { ru: 'GitHub', en: 'GitHub' },
  projects_demo: { ru: 'Перейти на сайт', en: 'Visit Site' },
  
  swageda_desc: { 
    ru: 'Веб-приложение для поиска, сохранения и управления кулинарными рецептами. Удобный интерфейс и быстрая работа.', 
    en: 'Web application for searching, saving, and managing culinary recipes. User-friendly interface and fast performance.' 
  },
  swiftfix_desc: { 
    ru: 'Платформа для быстрого поиска решений и фиксов для распространенных проблем. Удобная система тегов и поиска.', 
    en: 'Platform for quickly finding solutions and fixes for common issues. Convenient tag and search system.' 
  },
  whynot_desc: {
    ru: 'Главная страница, созданная в начале моего пути веб-разработки.',
    en: 'A landing page created at the beginning of my web development journey.'
  },
  avanstroy_desc: {
    ru: 'Проект, который продолжил мой путь развития и освоения новых веб-технологий.',
    en: 'A project that continued my path in learning and mastering new web technologies.'
  },
  
  badge_early_work: { ru: 'Ранний проект', en: 'Early Project' },
  badge_practice: { ru: 'Первые шаги', en: 'First Steps' },
  
  contact_title: { ru: 'Мои ссылки', en: 'My Links' },
  contact_desc: { 
    ru: 'Вы можете найти мои проекты, исходный код и связаться со мной через платформы ниже.', 
    en: 'You can find my projects, source code, and reach out to me through the platforms below.' 
  },
  contact_btn: { ru: 'Написать Email', en: 'Send Email' },
  
  footer_text: { ru: 'Разработано с Vue 3 и Vite.', en: 'Built with Vue 3 & Vite.' }
};

export const i18n = {
  get lang() {
    return state.lang;
  },
  set lang(value: Language) {
    state.lang = value;
  },
  t(key: string): string {
    return translations[key]?.[state.lang] || key;
  }
};
