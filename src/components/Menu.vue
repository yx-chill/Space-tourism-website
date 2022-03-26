<template>
  <div class="w-[254px] h-full absolute duration-300 top-0 bg-white/5 backdrop-blur-xl z-20 md:hidden"
    :class="isMenuShow ? 'right-0' : '-right-full'">
    <div class="h-[84px] px-[26px] py-8 flex justify-end items-center">
      <svg class="cursor-pointer" @click="closeMenu" xmlns="http://www.w3.org/2000/svg" width="20" height="21">
        <g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
    </div>
    <menu class="text-white">
      <ul class="space-y-8 py-8 pl-8">
        <li class="border-r-4 border-transparent hover:border-white duration-200 relative">
          <span class="mr-3 font-bold">00</span>HOME
          <router-link :to="{ name: 'Home' }" class="absolute inset-0" />  
        </li>
        <li class="border-r-4 border-transparent hover:border-white duration-200 relative">
          <span class="mr-3 font-bold">01</span>DESTINATION
          <router-link :to="{ name: 'Destination' }" class="absolute inset-0" />  
        </li>
        <li class="border-r-4 border-transparent hover:border-white duration-200 relative">
          <span class="mr-3 font-bold">02</span>CREW
          <router-link :to="{ name: 'Crew' }" class="absolute inset-0" />  
        </li>
        <li class="border-r-4 border-transparent hover:border-white duration-200 relative">
          <span class="mr-3 font-bold">03</span>TECHNOLOGY
          <router-link :to="{ name: 'Technology' }" class="absolute inset-0" />  
        </li>
      </ul>
    </menu>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const isMenuShow = computed(() => store.state.isMenuShow)
    const closeMenu = () => store.commit('closeMenu')

    return { closeMenu, isMenuShow }
  }
}
</script>
