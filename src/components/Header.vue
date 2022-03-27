<template>
  <header class="w-full h-24 absolute top-0 left-0">
    <div class="flex justify-between items-center relative px-6 md:px-0 mt-6 md:mt-0 xl:mt-10">
      <svg class="relative z-10 md:ml-[39px] xl:ml-[55px]" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
      <div class="w-[473px] h-[1px] bg-[#979797] absolute top-1/2 left-[167px] z-20 hidden xl:block"></div>
      <div>
        <svg class="md:hidden cursor-pointer relative z-10" @click="showMenu" v-show="!isMenuShow"
          xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
      </div>
      <nav class="w-3/5 h-full relative hidden md:block">
        <ul class="h-full text-white flex justify-center xl:justify-start items-center relative z-10 xl:pl-[123px]
          bg-white/5 backdrop-blur-xl md:space-x-[37px] xl:space-x-12">
          <li v-for="(nav, i) in navItem" :key="nav.name"
            class="leading-[93px] border-b-[3px] border-transparent hover:border-white duration-150 cursor-pointer relative
              uppercase md:tracking-[2.3625px] xl:tracking-[2.7px]"
            :class="{ 'border-white':  currPage === nav.path}">
            <span class="hidden xl:inline-block mr-[10px] font-bold">{{ `0${i + 1}` }}</span>{{ nav.name }}
            <router-link :to="{ name: nav.name }" class="absolute inset-0" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const navItem = [
      { name: 'Home', path: '/' },
      { name: 'Destination', path: '/dextination' },
      { name: 'Crew', path: '/crew' },
      { name: 'Technology', path: '/technology' }
    ]
    const currPage = computed(() => store.state.currPage)
    const isMenuShow = computed(() => store.state.isMenuShow)
    const showMenu = () => store.commit('showMenu')

    return { navItem, currPage, isMenuShow, showMenu }
  }
}
</script>

<style>

</style>