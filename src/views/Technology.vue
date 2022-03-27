<template>
  <section class="h-full bg-tech-mobile md:bg-tech-tablet xl:bg-tech-desktop bg-cover bg-no-repeat">
    <div class="h-full pt-[88px] md:pt-24 xl:pt-[136px] xl:pl-[165px] text-white">
      <div class="h-full flex flex-col xl:flex-wrap items-center xl:items-start md:mt-10 xl:mt-[76px]">
        <h3 class="md:text-xl xl:text-[28px] leading-[19px] md:leading-6 xl:leading-[34px] uppercase md:self-start
          md:ml-[38.5px] xl:ml-0 mb-8 md:mb-[60px] xl:mb-[137px] tracking-[2.7px] md:tracking-[3.375px] xl:tracking-[4.725px]">
          <span class="opacity-25 mr-7">03</span>SPACE LAUNCH 101</h3>
        <div class="xl:order-1 xl:self-end w-full xl:w-auto">
          <img class="w-full max-h-[310px] xl:max-h-[527px] xl:w-auto"
            :src="changePic ? data.portrait : data.landscape" alt="technology">
        </div>
        <div class="flex flex-col xl:flex-row items-center xl:justify-between px-6 xl:px-0 xl:w-[630px]">
          <ul class="flex xl:flex-col space-x-4 xl:space-x-0 xl:space-y-8
            mt-[34px] md:mt-14 xl:mt-0 mb-[26px] md:mb-[44px] xl:mb-0">
            <li v-for="(item, i) in technology.data" :key="item.name" @click="pick(item.name)"
              class="w-10 md:w-[58px] xl:w-20 aspect-square border border-white/25 rounded-full text-center cursor-pointer
              leading-10 md:leading-[58px] xl:leading-[80px] hover:border-white duration-300 font-['Bellefair']"
              :class="{ 'bg-white text-[#0B0D17]': item.name === data.name }">{{ i + 1 }}</li>
          </ul>
          <div class="text-center xl:text-left max-w-[327px] md:max-w-[458px] xl:max-w-[470px]">
            <div class="text-[#D0D6F9] text-sm md:text-base leading-[17px] md:leading-[19px] tracking-[2.3625px] md:tracking-[2.7px]">
              THE TERMINOLOGY…</div>
            <h2 class="text-xl md:text-[40px] xl:text-[56px] leading-[1.15] mt-2 mb-4 md:my-4 xl:mt-3 uppercase font-['Bellefair']">
              {{ data.name }}</h2>
            <p class="max-w-[445px] text-[#D0D6F9] text-[15px] md:text-base xl:text-lg leading-[25px] md:leading-[28px] xl:leading-[32px] font-['Barlow']">
              {{ data.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'

export default {
  setup() {
    const technology = reactive({ data: [] })
    const pickData = reactive({ data: [] })
    const changePic = ref(false)

    const size = (width) => {
      if (width >= 1280) {
        changePic.value = true
      }else {
        changePic.value = false
      }
    }
    size(document.documentElement.clientWidth)

    window.addEventListener('resize', ({ target }) => {
      size(target.innerWidth)
    })


    const getData =() => {
      fetch('public/api/data.json').then((res) => {
        return res.json()
      }).then((data) => {
        technology.data = data.technology
        pickData.data = data.technology[0]
        pickData.data.portrait = new URL(pickData.data.images.portrait, import.meta.url).href
        pickData.data.landscape = new URL(pickData.data.images.landscape, import.meta.url).href
      }).catch((error) => {
        console.log(error);
      })
    }
    getData()

    const pick = (terminology) => {
      [pickData.data] = technology.data.filter((item) => item.name === terminology)
      pickData.data.portrait = new URL(pickData.data.images.portrait, import.meta.url).href
      pickData.data.landscape = new URL(pickData.data.images.landscape, import.meta.url).href
    }

    const { data } = toRefs(pickData)

    return { technology, pick, data, changePic }
  }

}
</script>
