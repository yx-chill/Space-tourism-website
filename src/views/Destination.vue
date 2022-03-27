<template>
  <section class="h-full bg-des-mobile md:bg-des-tablet xl:bg-des-desktop bg-cover bg-no-repeat pt-[88px] md:pt-24 xl:pt-[136px]">
    <div class="flex flex-col xl:flex-row xl:justify-around items-center md:mt-10 xl:mt-[76px]">
      <div class="xl:w-[509px] text-white flex flex-col items-center xl:items-start">
        <h2 class="md:text-xl xl:text-[28px] leading-[19px] md:leading-6 xl:leading-[34px]
          uppercase tracking-[2.7px] md:tracking-[3.375px] xl:tracking-[4.725px]">
          <span class="opacity-25 mr-7">01</span>Pick your destination</h2>
        <img class="w-[170px] md:w-[300px] xl:w-[445px] aspect-square mt-8 md:mt-[60px] xl:mt-[97px] xl:self-end"
          :src="data.img" alt="planet">
      </div>
      <div class="w-[327px] md:w-[573px] xl:w-[445px]">
        <div class="text-white flex flex-col items-center xl:items-start">
          <ul class="text-white flex space-x-9 mt-[26px] md:mt-[53px] xl:mt-0">
            <li v-for="planet in destination.data" :key="planet.name" @click="pick(planet.name)"
              class="cursor-pointer pb-3 border-b-[3px] border-b-transparent hover:border-b-white uppercase
                text-[#D0D6F9] tracking-[2.3625px] md:tracking-[2.7px]"
              :class="{ 'border-b-white': planet.name === data.name }">
              {{ planet.name }}</li>
          </ul>
          <span class=" text-[56px] md:text-[80px] xl:text-[100px] leading-[64px] md:leading-[92px] xl:leading-[115px]
            mt-5 md:mt-8 xl:mt-[37px] uppercase font-['Bellefair']">{{ data.name }}</span>
          <p class="text-[15px] md:text-base xl:text-lg leading-[28px] md:leading-7 xl:leading-8 mt-[1px] md:mt-2 xl:mt-[14]
            text-[#D0D6F9] w-full text-center xl:text-left pb-[49px] border-b border-b-[#383B4B] font-['Barlow']">
            {{ data.description }}</p>
        </div>
        <div class="space-y-8 md:space-y-0 flex flex-col md:flex-row justify-around items-center mt-8">
          <div class="text-white space-y-3 text-center">
            <h3 class="text-[#D0D6F9] text-sm leading-[16.8px] tracking-[2.3625px]">AVG. DISTANCE</h3>
            <p class="text-[28px] leading-8 font-['Bellefair'] uppercase">{{ data.distance }}</p>
          </div>
          <div class="text-white space-y-3 text-center">
            <h3 class="text-[#D0D6F9] text-sm leading-[16.8px] tracking-[2.3625px]">Est. travel time</h3>
            <p class="text-[28px] leading-8 font-['Bellefair'] uppercase">{{ data.travel }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const destination = reactive({ data: [] })
    const pickData = reactive({ data: [] })

    const getData = () => {
        fetch('api/data.json').then((res) => {
          return res.json()
        }).then((data) => {
          destination.data = data.destinations
          pickData.data = data.destinations[0]
          pickData.data.img = new URL(pickData.data.images.webp, import.meta.url).href
        }).catch((error) => {
          console.log(error);
        })
    }
    getData()

    const pick = (planet) => {
      [pickData.data] = destination.data.filter((item) => item.name === planet)
      pickData.data.img = new URL(pickData.data.images.webp, import.meta.url).href
    }

    const { data } = toRefs(pickData)

    return { destination, pick, data }
  }
}
</script>
