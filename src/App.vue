<template>
  <main class="h-screen w-auto overflow-hidden relative">
    <Menu />
    <Header />
    <router-view />
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

export default {
  components: { Header, Menu },
}
</script>
