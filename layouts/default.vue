<script setup>
let randomBg = Math.ceil(Math.random() * 4);
watch(useRoute(), () => {
  if (useRoute().path === "/") randomBg = Math.ceil(Math.random() * 4);
});
</script>
<template>
  <div>
    <div
      class="transition-all duration-1000"
      :class="[
        useRoute().path === '/' ? 'opacity-100 visible' : 'opacity-0 invisible',
      ]"
    >
      <ImageRenderer
        :src="`/images/gradient/${randomBg}.jpg`"
        alt="'youtube music index page gradient background'"
        imgClassList="min-w-full min-h-full"
        wrapperClassList="min-w-full h-1/2 absolute overflow-hidden flex items-center justify-center"
      />
    </div>
    <div
      class="absolute min-w-full h-1/2 bg-gradient-to-b from-ytblack/60 to-ytblack"
    />
    <Header />
    <slot />
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

.scrollbar::-webkit-scrollbar {
  width: 8px;
  background-color: #232424;
  border-left: 1px #232424 solid;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: rgb(90, 90, 90);
}
</style>
