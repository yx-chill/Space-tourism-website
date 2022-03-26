<template>
  <section class="h-full w-full relative flex flex-col justify-between items-center xl:items-end xl:flex-row
    bg-mobile md:bg-tablet xl:bg-desktop bg-cover bg-no-repeat -z-10
    pt-28 pb-1 md:pt-[202px] md:pb-[2px] xl:pb-[131px] xl:px-[165px]">
    <div class="w-[327px] md:w-[450px] h-auto text-[#D0D6F9] text-center xl:text-left font-normal">
      <h2 class="md:text-xl xl:text-lg leading-[1.2]">SO, YOU WANT TO TRAVEL TO
        <span class="block text-[80px] md:text-[150px] leading-[100px] md:leading-none xl:leading-[172px] text-white my-4 md:my-6">SPACE</span>
      </h2>
      <p class="text-[15px] md:text-base xl:text-lg leading-[25px] xl:leading-8">Let’s face it; if you want to go to space, you might as well 
        genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <div class="w-[238px] md:w-[418px] xl:w-[450px] aspect-square flex justify-center items-center">
      <router-link :to="{ name: 'Destination' }" class="w-[150px] md:w-[242px] xl:w-[274px] aspect-square bg-white rounded-full
      text-center duration-100 cursor-pointer text-[#0B0D17] text-xl md:text-2xl leading-[150px] md:leading-[242px] xl:leading-[274px]
      hover:shadow-explore hover:md:shadow-explore-md xl:translate-y-[88px]">
        EXPLORE
      </router-link>
    </div>
  </section>
</template>

<script>
</script>
