<template>
  <div class="h-screen w-auto bg-mobile md:bg-tablet xl:bg-desktop bg-cover bg-no-repeat p-12">
    <Header />
  </div>
  <main class="w-full h-full relative">
    <div class="w-[450px] h-auto text-[#D0D6F9] font-normal absolute left-[165px] bottom-[131px]">
      <h2 class="text-lg leading-[34px]">SO, YOU WANT TO TRAVEL TO
        <span class="block text-[150px] leading-[172px] text-white">SPACE</span>
      </h2>
      <p class="text-lg leading-8">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <div class="w-[450px] h-[450px] flex justify-center items-center absolute right-[77px] bottom-[43px]">
      <div class="w-[274px] h-[274px] bg-white rounded-full text-center hover:shadow-explore duration-100">
        <span class="text-[#0B0D17] text-2xl leading-[274px]">EXPLORE</span>
      </div>
    </div>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: { Header }
}
</script>
