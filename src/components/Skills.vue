<script setup lang="ts">
import { i18n } from '../store/i18n';

const skillCategories = [
  {
    titleKey: 'skills_cat_frontend',
    items: ['Astro', 'Semantic HTML5', 'JavaScript', 'Bootstrap', 'Responsive Design', 'Web Accessibility (WCAG 2.1+)']
  },
  {
    titleKey: 'skills_cat_backend',
    items: ['Laravel', 'PHP', 'Blade', 'Node.js', 'REST API', 'Static Site Generation (SSG)']
  },
  {
    titleKey: 'skills_cat_devops',
    items: ['Linux VPS', 'Nginx', 'PM2', 'CI/CD', 'SSL']
  },
  {
    titleKey: 'skills_cat_core',
    items: ['Web Performance Optimization (WPO)', 'SEO']
  }
];
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2 class="section-title">{{ i18n.t('skills_title') }}</h2>
      <div class="skills-categories">
        <div class="skill-category" v-for="cat in skillCategories" :key="cat.titleKey">
          <h3 class="category-title">{{ i18n.t(cat.titleKey) }}</h3>
          <div class="skills-grid">
            <div class="skill-item" v-for="skill in cat.items" :key="skill">
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background-color: var(--bg-surface);
}

.skills-categories {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.category-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: var(--text-h);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  max-width: 800px;
  margin: 0 auto;
}

.skill-item {
  background-color: color-mix(in srgb, var(--secondary) 15%, var(--bg-surface));
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 1.05rem;
  color: var(--text);
  transition: all 0.2s ease;
  cursor: pointer;
}

.skill-item:hover {
  background-color: color-mix(in srgb, var(--secondary) 25%, var(--bg));
  color: var(--text);
}
</style>
