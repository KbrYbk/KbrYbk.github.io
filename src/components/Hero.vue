<script setup lang="ts">
import { i18n } from '../store/i18n';
</script>

<template>
  <section id="about" class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
        <p class="greeting">{{ i18n.t('hero_greeting') }}</p>
        <h1 class="name">
          {{ i18n.t('hero_name') }}<span class="cursor">_</span>
        </h1>
        <h2 class="role">{{ i18n.t('hero_role') }}</h2>
        <p class="description">{{ i18n.t('hero_desc') }}</p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-secondary">{{ i18n.t('hero_btn_projects') }}</a>
          <a href="#contact" class="btn">{{ i18n.t('hero_btn_contact') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 70px;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-content {
  max-width: 700px;
}

.greeting {
  color: var(--primary);
  font-family: var(--mono);
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.name {
  font-size: clamp(40px, 8vw, 70px);
  margin-bottom: 10px;
  color: var(--text-h);
}

.name .cursor {
  color: var(--primary);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.role {
  font-size: clamp(30px, 6vw, 50px);
  color: var(--text-muted);
  margin-bottom: 30px;
}

.description {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 550px;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 15px;
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
  }
}
</style>
