<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { i18n } from '../store/i18n';

const isDark = ref(false);

const toggleLang = () => {
  i18n.lang = i18n.lang === 'ru' ? 'en' : 'ru';
};

const toggleTheme = () => {
  const root = document.documentElement;
  const current = root.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  isDark.value = newTheme === 'dark';
};

onMounted(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    isDark.value = savedTheme === 'dark';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
});
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <div class="logo">
        <a href="#">KbrYbk</a>
      </div>
      <nav class="nav">
        <a href="#about">{{ i18n.t('nav_about') }}</a>
        <a href="#skills">{{ i18n.t('nav_skills') }}</a>
        <a href="#projects">{{ i18n.t('nav_projects') }}</a>
        <a href="#contact">{{ i18n.t('nav_contact') }}</a>
        <div class="toggles">
          <button class="icon-toggle" @click="toggleTheme" title="Toggle Theme">
            <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
          <button class="lang-toggle" @click="toggleLang">
            {{ i18n.lang === 'ru' ? 'EN' : 'RU' }}
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(var(--bg-rgb), 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  z-index: 100;
  display: flex;
  align-items: center;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-h);
  font-family: var(--mono);
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--accent);
}

.toggles {
  display: flex;
  gap: 10px;
  align-items: center;
}

.lang-toggle, .icon-toggle {
  background: none;
  border: 1px solid var(--border);
  border-radius: 4px;
  color: var(--text-h);
  font-weight: 600;
  font-size: 0.85rem;
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
}

.icon-toggle {
  width: 30px;
  padding: 0;
}

.lang-toggle:hover, .icon-toggle:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

@media (max-width: 768px) {
  .nav {
    display: none; /* Mobile menu can be added later */
  }
}
</style>
