<script setup>
let randomBg = Math.ceil(Math.random() * 7);
let previousBg = [randomBg, randomBg, randomBg];

watch(useRoute(), () => {
  function changeBgImage() {
    randomBg = Math.ceil(Math.random() * 7);
    if (previousBg.includes(randomBg)) {
      changeBgImage();
    } else {
      previousBg.shift();
      previousBg.push(randomBg);
    }
  }

  if (useRoute().path === "/") changeBgImage();
});

function categories() {
  if (useRoute().path === "/library") {
    return [
      {
        name: "Playlists",
        link: "/",
      },
      {
        name: "Songs",
        link: "/",
      },
      {
        name: "Albums",
        link: "/",
      },
      {
        name: "Artists",
        link: "/",
      },
    ];
  } else {
    return [
      {
        name: "Relax",
        link: "/relax",
      },
      {
        name: "Energize",
        link: "/energize",
      },
      {
        name: "Focus",
        link: "/focus",
      },
      {
        name: "Workout",
        link: "/workout",
      },
      {
        name: "Commute",
        link: "/commute",
      },
    ];
  }
}
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
    <Header class="relative z-20" />
    <SongSettingsMenu />
    <div
      class="max-ytsm:px-4 max-ytlg:px-14 ytlg:max-w-[1040px] ytxl:max-w-[1255px] yt2xl:max-w-[1470px] mx-auto mt-6 ytmd:mt-8 yt3xl:mt-10"
    >
      <Categories :categories="categories()" />
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
</style>
