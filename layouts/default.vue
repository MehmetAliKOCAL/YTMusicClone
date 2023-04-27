<script setup>
let randomBg = Math.ceil(Math.random() * 6);
let previousBg = [randomBg, randomBg, randomBg];

watch(useRoute(), () => {
  function changeBgImage() {
    randomBg = Math.ceil(Math.random() * 6);
    if (previousBg.includes(randomBg)) {
      changeBgImage();
    } else {
      previousBg.shift();
      previousBg.push(randomBg);
    }
  }

  if (useRoute().path === "/") changeBgImage();
});
</script>

<template>
  <div class="font-robotoExt">
    <div class="absolute w-full h-full -z-10">
      <div
        class="transition-all duration-1000"
        :class="[
          useRoute().path === '/'
            ? 'opacity-100 visible'
            : 'opacity-0 invisible',
        ]"
      >
        <ImageRenderer
          :src="`/images/gradient/${randomBg}.jpg`"
          alt="'youtube music index page gradient background'"
          imgElementClassList="min-w-full min-h-full"
          wrapperElementClassList="min-w-full h-1/2 absolute overflow-hidden flex items-center justify-center"
        />
      </div>
      <div
        class="absolute min-w-full h-1/2 bg-gradient-to-b from-ytblack/60 to-ytblack"
      />
    </div>
    <Header />
    <div
      class="max-ytsm:px-4 max-ytlg:px-14 ytlg:max-w-[1060px] ytxl:max-w-[1275px] yt2xl:max-w-[1480px] mx-auto mt-5"
    >
      <Categories />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

::-webkit-scrollbar {
  width: 12px;
  background-color: rgb(27, 27, 27);
  border-left: 1px rgb(50, 50, 50) solid;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(90, 90, 90);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(110, 110, 110);
}

body {
  background-color: rgb(3, 3, 3);
}

.settingsMenuScrollbar::-webkit-scrollbar {
  width: 8px;
  background-color: #282828;
  border: none;
}

.settingsMenuScrollbar::-webkit-scrollbar-thumb {
  background-color: #616160;
}

.categoriesScrollbar::-webkit-scrollbar {
  height: 3px;
  background-color: transparent;
  border: none;
}

.categoriesScrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
