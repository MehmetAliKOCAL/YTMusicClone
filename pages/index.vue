<script setup>
const carouselItems = [
  {
    name: "lana del rey - yes to heaven (intro loop 0.80x speed)",
    artists: [{ name: "Myxomatosis", link: "/" }],
    views: "12K",
    image:
      "https://i.ytimg.com/vi/9tUg46n9KPs/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lFqdzJuBvPPRuGdrg9Si3twFCQVA",
    link: "/",
    type: "video",
  },
  {
    name: "METAMORPHOSIS 3",
    artists: [
      { name: "INTERWORLD", link: "/" },
      { name: "zxcursed", link: "/" },
      { name: "Sadfriendd", link: "/" },
    ],
    views: "",
    image:
      "https://lh3.googleusercontent.com/npACGZxDWr77-RKaHUF1zbYizwSK9cysQ-WDtiM3XeUcdcIrz7QkBQXS2V7xLOrcF8eX_W2riGTxhgJ-HQ=w226-h226-l90-rj",
    link: "/",
    type: "music",
    album: "Single",
    explicit: true,
  },
];
</script>
<template>
  <div class="mt-4">
    <HorizontalCarousel
      :items="carouselItems"
      :image="{
        path: '/images/pfp.jpg',
        redirect: '/',
        alt: 'user profile picture',
        showImage: true,
        isRounded: true,
      }"
      :title="{ text: 'Listen again', link: '/' }"
      subtitle="GwynDev"
    />
  </div>
</template>
