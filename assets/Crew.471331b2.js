import{_ as p}from"./index.033584ec.js";import{m as n,p as f,o,a as c,b as t,F as h,d as _,t as r,e as w,n as g}from"./vendor.d3669aad.js";const m={},u={setup(){const x=n({data:[]}),l=n({data:[]});(()=>{fetch("Space-tourism-website/api/data.json").then(a=>a.json()).then(a=>{x.data=a.crew,l.data=a.crew[0],l.data.img=new URL(l.data.images.webp,m.url).href}).catch(a=>{console.log(a)})})();const e=a=>{[l.data]=x.data.filter(s=>s.name===a),l.data.img=new URL(l.data.images.webp,m.url).href},{data:d}=f(l);return{crew:x,pick:e,data:d}}},b={class:"h-full bg-crew-mobile md:bg-crew-tablet xl:bg-crew-desktop bg-cover bg-no-repeat"},k={class:"h-full pt-[88px] md:pt-24 xl:pt-[136px] text-white"},v={class:"h-full flex flex-col xl:flex-wrap items-center px-6 md:px-[38.5px] xl:px-[142px] md:mt-10 xl:mt-[76px]"},B=t("h3",{class:"md:text-xl xl:text-[28px] leading-[19px] md:leading-6 xl:leading-[34px] uppercase md:self-start tracking-[3.375px] md:tracking-[4.725px]"},[t("span",{class:"opacity-25 mr-7"},"02"),w("Meet your crew")],-1),y={class:"w-full md:max-w-[458px] xl:max-w-[568px] h-[233px] md:h-[572px] xl:h-[712px] border-b border-[#383B4B] mt-8 md:mt-10 xl:mt-0 md:order-1"},D=["src"],C={class:"flex flex-col items-center xl:items-start md:max-w-[520px] xl:max-w-[614px] mt-8 md:mt-[60px] xl:mt-[154px] xl:self-start"},F={class:"flex space-x-4 xl:space-x-6 md:order-1 md:mt-10 xl:mt-[120px]"},L=["onClick"],R={class:"md:text-2xl xl:text-[32px] leading-[18px] md:leading-7 xl:leading-[37px] opacity-50 mt-8 md:mt-0 uppercase font-['Bellefair']"},j={class:"text-2xl md:text-[40px] xl:text-[56px] leading-7 md:leading-[46px] xl:leading-[64px] mt-2 xl:mt-4 mb-4 xl:mb-[26px] uppercase font-['Bellefair']"},N={class:"w-full max-w-[327px] md:max-w-[520px] xl:max-w-[445px] text-[#D0D6F9] text-center xl:text-left font-['Barlow'] xl:tracking-[1.1px]"};function S(x,l,i,e,d,a){return o(),c("section",b,[t("div",k,[t("div",v,[B,t("div",y,[t("img",{class:"h-full w-auto mx-auto",src:e.data.img,alt:"crew"},null,8,D)]),t("div",C,[t("ul",F,[(o(!0),c(h,null,_(e.crew.data,s=>(o(),c("li",{key:s.name,onClick:U=>e.pick(s.name),class:g(["w-[15px] h-[15px] bg-white rounded-full opacity-[.17] cursor-pointer hover:shadow-active duration-200",{"opacity-100":s.name===e.data.name}])},null,10,L))),128))]),t("div",R,r(e.data.role),1),t("h2",j,r(e.data.name),1),t("p",N,r(e.data.bio),1)])])])])}var E=p(u,[["render",S]]);export{E as default};
