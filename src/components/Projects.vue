<script setup lang="ts">
import { ref, computed } from 'vue';
import { marked } from 'marked';
import { i18n } from '../store/i18n';

const projects = computed(() => [
  {
    title: 'SwagEda',
    description: i18n.t('swageda_desc'),
    logo: '/img/swageda-logo.svg',
    readmeUrlBase: '/markdown/swageda',
    tech: ['Astro', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/KbrYbk/recipe-frontend',
    demo: 'https://swageda.ru/',
    badge: null
  },
  {
    title: 'Swiftfix',
    description: i18n.t('swiftfix_desc'),
    logo: '/img/swiftfix-logo.svg',
    readmeUrlBase: '/markdown/swiftfix',
    tech: ['Laravel', 'Vue 3', 'Vite', 'Bootstrap'],
    github: 'https://github.com/KbrYbk/SwiftFix',
    demo: 'https://swiftfix.site.je/',
    badge: null
  },
  {
    title: 'Аванстрой',
    description: i18n.t('avanstroy_desc'),
    logo: '/avanstroy/resources/img/logo.png',
    readmeUrlBase: '/markdown/avanstroy',
    tech: ['HTML5', 'CSS3'],
    github: '#',
    demo: '/avanstroy/index.html',
    badge: 'badge_early_work'
  },
  {
    title: 'Whynot Landing',
    description: i18n.t('whynot_desc'),
    logo: '/img/whynot-logo.png',
    readmeUrlBase: '/markdown/whynot',
    tech: ['HTML5', 'CSS3', 'Bootstrap'],
    github: '#',
    demo: '/whynot/index.html',
    badge: 'badge_practice'
  }
]);

const selectedProjectMarkdown = ref<string | null>(null);
const selectedProject = ref<any>(null);
const isModalOpen = ref(false);

const openProjectDetails = async (project: any) => {
  try {
    selectedProject.value = project;
    const readmeUrl = `${project.readmeUrlBase}.${i18n.lang}.md`;
    const response = await fetch(readmeUrl);
    if (!response.ok) throw new Error('Не удалось загрузить описание проекта');
    const text = await response.text();
    // Configure marked for secure rendering if needed, but basic usage is fine here
    selectedProjectMarkdown.value = marked(text) as string;
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  } catch (error) {
    console.error(error);
    selectedProjectMarkdown.value = '<p>Не удалось загрузить описание.</p>';
    isModalOpen.value = true;
  }
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProjectMarkdown.value = null;
  document.body.style.overflow = '';
};
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">{{ i18n.t('projects_title') }}</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="(project, index) in projects" :key="index" @click="openProjectDetails(project)">
          <div class="logo-container" v-if="project.logo">
            <img :src="project.logo" :alt="project.title" class="project-logo" />
          </div>
          <div class="project-content">
            <h3 class="project-title" :class="{'no-logo': !project.logo}">
              <span class="title-highlight">{{ project.title }}</span>
            </h3>
            <p class="project-desc">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for README -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">&times;</button>
        
        <div class="modal-presentation" v-if="selectedProject">
          <div class="modal-header">
            <div class="modal-title-wrapper">
              <h2>{{ selectedProject.title }}</h2>
              <div v-if="selectedProject.badge" class="project-badge modal-badge">
                {{ i18n.t(selectedProject.badge) }}
              </div>
            </div>
            <div class="modal-links">
              <a :href="selectedProject.demo" target="_blank" rel="noopener noreferrer" class="btn">
                {{ i18n.t('projects_demo') }}
              </a>
              <a :href="selectedProject.github" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                {{ i18n.t('projects_github') }}
              </a>
            </div>
          </div>
          <p class="modal-intro">{{ selectedProject.description }}</p>
          <hr class="modal-divider" />
        </div>

        <div class="markdown-body" v-html="selectedProjectMarkdown"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  position: relative;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: color-mix(in srgb, var(--secondary) 15%, var(--bg));
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 30px 20px;
  text-align: center;
  border: 1px solid transparent;
  position: relative;
}

.project-badge {
  background-color: var(--secondary);
  color: var(--btn-secondary-text);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
}

.modal-title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.modal-badge {
  position: static;
  margin-bottom: 0;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--secondary);
}

.logo-container {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.project-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.project-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
}

.project-title.no-logo {
  margin-top: 30px;
}

.title-highlight {
  position: relative;
  display: inline-block;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: -5px;
  right: -5px;
  height: 8px;
  background-color: var(--secondary);
  z-index: -1;
  border-radius: 4px;
}

.project-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}


/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background-color: var(--bg);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  border-radius: var(--radius);
  overflow-y: auto;
  padding: 40px;
  position: relative;
  box-shadow: var(--shadow-lg);
}

.modal-presentation {
  margin-bottom: 2rem;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2.5rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  color: var(--text-muted);
  cursor: pointer;
  line-height: 1;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
  z-index: 10;
}

.close-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
  padding-right: 30px; /* prevent overlap */
}

.modal-header h2 {
  margin: 0;
  font-size: 2rem;
}

.modal-links {
  display: flex;
  gap: 1rem;
}

.modal-intro {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
}

.modal-divider {
  border: 0;
  height: 1px;
  background: var(--border);
  margin: 2rem 0;
}
.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3) {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  color: var(--text-h);
}

.markdown-body :deep(p) {
  margin-bottom: 1em;
  line-height: 1.6;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  padding-left: 2em;
  margin-bottom: 1em;
}

.markdown-body :deep(a) {
  color: var(--accent);
}

.markdown-body :deep(img) {
  max-width: 100%;
  border-radius: 8px;
  margin: 1em 0;
}

.markdown-body :deep(pre) {
  background-color: var(--bg-surface);
  padding: 1em;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid var(--border);
}

.markdown-body :deep(code) {
  font-family: var(--mono);
  background-color: var(--bg-surface);
  padding: 0.2em 0.4em;
  border-radius: 3px;
}

.markdown-body :deep(blockquote) {
  border-left: 4px solid var(--accent);
  margin: 0;
  padding-left: 1em;
  color: var(--text-muted);
}
</style>
