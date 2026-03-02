---
layout: page
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

onMounted(() => {
  useRouter().go('/guide/what-is-caja')
})
</script>
