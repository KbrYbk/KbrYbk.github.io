<script setup lang="ts">
import { i18n } from '../store/i18n';
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container contact-inner">
      <h2 class="section-title">{{ i18n.t('contact_title') }}</h2>
      <p class="contact-desc">
        {{ i18n.t('contact_desc') }}
      </p>
      
      <div class="contact-links">
        <a href="https://t.me/kbrybk" target="_blank" rel="noopener noreferrer" class="btn">Telegram</a>
        <a href="https://github.com/KbrYbk" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: var(--bg-surface);
  text-align: center;
  padding: 100px 0;
}

.contact-inner {
  max-width: 600px;
  margin: 0 auto;
}

.contact-desc {
  color: var(--text-muted);
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.social-links a {
  color: var(--text-h);
  font-weight: 500;
  position: relative;
}

.social-links a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--accent);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.social-links a:hover {
  color: var(--accent);
}

.social-links a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
