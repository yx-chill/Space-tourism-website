<template>
  <section class="h-full bg-crew-mobile md:bg-crew-tablet xl:bg-crew-desktop bg-cover bg-no-repeat">
    <div class="h-full pt-[88px] md:pt-24 xl:pt-[136px] text-white">
      <div class="h-full flex flex-col xl:flex-wrap items-center px-6 md:px-[38.5px] xl:px-[142px] md:mt-10 xl:mt-[76px]">
        <h3 class="md:text-xl xl:text-[28px] leading-[19px] md:leading-6 xl:leading-[34px] uppercase md:self-start
          tracking-[3.375px] md:tracking-[4.725px]">
            <span class="opacity-25 mr-7">02</span>Meet your crew</h3>
        <div class="w-full md:max-w-[458px] xl:max-w-[568px] h-[233px] md:h-[572px] xl:h-[712px] border-b border-[#383B4B]
          mt-8 md:mt-10 xl:mt-0 md:order-1">
          <img class="h-full w-auto mx-auto" :src="data.img" alt="crew">
        </div>
        <div class="flex flex-col items-center xl:items-start md:max-w-[520px] xl:max-w-[614px] mt-8 md:mt-[60px] xl:mt-[154px] xl:self-start">
          <ul class="flex space-x-4 xl:space-x-6 md:order-1 md:mt-10 xl:mt-[120px]">
            <li v-for="item in crew.data" :key="item.name" @click="pick(item.name)"
              class="w-[15px] h-[15px] bg-white rounded-full opacity-[.17] cursor-pointer hover:shadow-active duration-200"
              :class="{'opacity-100': item.name === data.name}">
            </li>
          </ul>
          <div class="md:text-2xl xl:text-[32px] leading-[18px] md:leading-7 xl:leading-[37px] opacity-50
            mt-8 md:mt-0 uppercase font-['Bellefair']">{{ data.role }}</div>
          <h2 class="text-2xl md:text-[40px] xl:text-[56px] leading-7 md:leading-[46px] xl:leading-[64px]
            mt-2 xl:mt-4 mb-4 xl:mb-[26px] uppercase font-['Bellefair']">{{ data.name }}</h2>
          <p class="w-full max-w-[327px] md:max-w-[520px] xl:max-w-[445px] text-[#D0D6F9] text-center xl:text-left font-['Barlow'] xl:tracking-[1.1px]">
            {{ data.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const crew = reactive({ data: [] })
    const pickData = reactive({ data: [] })
    const getData = () => {
      fetch('https://song.sally-handmade.com/data.json').then((res) => {
        return res.json()
      }).then((data) => {
        console.log(data);
        crew.data = data.crew
        pickData.data = data.crew[0]
        pickData.data.img = new URL(pickData.data.images.webp, import.meta.url).href
      }).catch((error) => {
        console.log(error);
      })
    }
    getData()

    const pick = (person) => {
      [pickData.data] = crew.data.filter((item) => item.name === person)
      pickData.data.img = new URL(pickData.data.images.webp, import.meta.url).href
    }

    const { data } = toRefs(pickData)
  
    return { crew, pick, data }
  }
}
</script>
