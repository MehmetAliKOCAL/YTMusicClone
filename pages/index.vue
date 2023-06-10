<script setup>
  import songs from '/utilities/songs.json';
</script>

<template>
  <div class="mt-4 space-y-14 ytlg:space-y-24 ytxl:space-y-28 yt2xl:space-y-32">
    <HorizontalCarousel
      :items="songs.slice(0, 8)"
      :image="{
        path: '/images/pfp.jpg',
        redirect: '/',
        alt: 'GwynDev Profile Picture',
        showImage: true,
        isRounded: true,
      }"
      :title="{ text: 'Listen again', link: '/' }"
      subtitle="GwynDev"
      :showMore="true"
    />
    <HorizontalCarousel
      :items="songs"
      :title="{ text: 'Quick picks', link: '/' }"
      subtitle="Start Radio From A Song"
      :isCompact="true"
    />
    <HorizontalCarousel
      :items="songs.slice(8, 16)"
      :image="{
        path: 'https://lh3.googleusercontent.com/SO7gH564_3Kq9hCODuPYJVyGDNyMeH0J8u--bwcI5hSvMwulIVWtY5mJx3R0vBcqglhOU_wLa9ZIBuU=w60-h60-l90-rj',
        redirect: '/',
        alt: 'Crystal Castles',
        showImage: true,
        isRounded: true,
      }"
      :title="{ text: 'Crystal Castles', link: '/' }"
      subtitle="Similar To"
      :showMore="true"
    />
    <HorizontalCarousel
      :items="songs.slice(16)"
      :title="{ text: 'Mixed for you', link: '/' }"
      :showMore="true"
    />
  </div>
</template>
