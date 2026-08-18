<script setup lang="ts">
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import { i18n } from './store/i18n';
</script>

<template>
  <div class="app-wrapper">
    <Header />
    
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
    
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} KbrYbk. {{ i18n.t('footer_text') }}</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

.footer {
  text-align: center;
  padding: 30px 0;
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.9rem;
}
</style>
