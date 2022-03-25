<template>
  <main class="h-screen w-auto bg-mobile md:bg-tablet xl:bg-desktop bg-cover bg-no-repeat flex flex-col">
    <Header />
    <router-view />
  </main>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: { Header }
}
</script>
