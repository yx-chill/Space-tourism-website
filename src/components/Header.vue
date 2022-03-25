<template>
  <header class="w-full h-24 flex justify-between items-center relative px-6 md:px-0 mt-6 md:mt-0 xl:mt-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
    <div class="w-[473px] h-[1px] bg-[#979797] absolute top-1/2 left-28 z-10 hidden xl:block"></div>
    <div>
      <svg class="md:hidden cursor-pointer"
        xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
    </div>
    <nav class="w-3/5 h-full relative hidden md:block">
      <ul class="h-full text-white flex justify-center xl:justify-start items-center relative z-10 xl:pl-[123px]
        bg-white/5 backdrop-blur-xl md:space-x-[37px] xl:space-x-12">
        <li class="leading-[93px] border-b-[3px] border-transparent hover:border-white duration-300 cursor-pointer relative">
          <span class="hidden xl:inline-block mr-[10px] font-bold">00</span>HOME
          <router-link :to="{ name: 'Home' }" class="absolute inset-0" />
        </li>
        <li class="leading-[93px] border-b-[3px] border-transparent hover:border-white duration-300 cursor-pointer relative">
          <span class="hidden xl:inline-block mr-[10px] font-bold">01</span>DESTINATION
          <router-link :to="{ name: 'Destination' }" class="absolute inset-0" />
        </li>
        <li class="leading-[93px] border-b-[3px] border-transparent hover:border-white duration-300 cursor-pointer relative">
          <span class="hidden xl:inline-block mr-[10px] font-bold">02</span>CREW
          <router-link :to="{ name: 'Crew' }" class="absolute inset-0" />
        </li>
        <li class="leading-[93px] border-b-[3px] border-transparent hover:border-white duration-300 cursor-pointer relative">
          <span class="hidden xl:inline-block mr-[10px] font-bold">03</span>TECHNOLOGY
          <router-link :to="{ name: 'Technology' }" class="absolute inset-0" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>