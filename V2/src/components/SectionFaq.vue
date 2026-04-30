<template>
  <section id="faq" class="section-faq">
    <h2 class="section-titre">Questions fréquentes</h2>
<div class="faq-liste">
  <div
    v-for="item in faqItems"
    :key="item.id"
    class="faq-item"
    :class="{ ouvert: ouvertId === item.id }"
  >
    <button class="faq-question" @click="basculer(item.id)">
      <span>{{ item.question }}</span>
      <span class="faq-icone">+</span>
    </button>
    <div class="faq-reponse">
      <div class="faq-reponse-inner">
      <p>{{ item.reponse }}</p>
    </div>
    </div>
</div>
</div>
  </section>
</template>

<script setup>

import { ref } from "vue";
import { faqItems } from "../data/faq.js";

const ouvertId = ref(null)

const basculer = (id) => {
  ouvertId.value = ouvertId.value === id ? null : id
}

</script>

<style scoped>

.section-faq {
  max-width: 960px;
  margin: 50px auto;
  padding: 40px 24px;
}

.section-titre {
  font-size: 2rem;
  margin-bottom: 2.5rem;
  text-align: center;
  color: var(--text);
  font-weight: 700;
}

.faq-liste {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.faq-item {
  border-bottom: 1px solid var(--border);
  transition: background 0.3s ease, padding 0.3s ease;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  padding: 20px 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  text-align: left;
  gap: 16px;
  transition: color 0.2s;
}

.faq-question:hover {
  color: var(--green);
}

.faq-icone {
  font-size: 18px;
  color: var(--green);
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.faq-item.ouvert .faq-icone {
  transform: rotate(45deg);
}

.faq-item.ouvert {
  background: var(--faint);
  padding: 0 16px;
}

.faq-reponse {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.faq-item.ouvert .faq-reponse {
  grid-template-rows: 1fr;
}

.faq-reponse-inner {
  overflow: hidden;
}

.faq-reponse-inner p {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
  padding-bottom: 20px;
}

@media (max-width: 768px) {
  .section-faq {
    padding: 40px 0;
  }
}

</style>