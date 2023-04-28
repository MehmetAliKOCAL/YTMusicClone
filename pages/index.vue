<script setup>
const carouselItems = [
  {
    type: "music",
    name: "Kerosene (Phonk Version)",
    artists: [
      {
        name: "crvvdy",
        link: "/",
      },
    ],
    image:
      "https://lh3.googleusercontent.com/2Km9wdDhevIp1rK1dlhRFgSGmMH5T0FhgX4DLwtJ3mGucJlIINmCO8rQDWcA-shuMQiSHFVd6RzcTLs=w544-h544-l90-rj",
    link: "https://music.youtube.com/watch?v=bQQ0cZk8dW8&list=RDAMVMTj9RZ17FcQY",
    album: "2023",
    explicit: false,
  },
  {
    type: "music",
    name: "REVIVAL",
    artists: [
      {
        name: "MoonDeity",
        link: "/",
      },
    ],
    image:
      "https://lh3.googleusercontent.com/Upi0Im7Cd8KNSwkdFiZzRrbJZFVSoLL95Emf0b1SIXA5gJhYheh6xnkEFhBazREm6wN4vCd7UeXhpDue=w226-h226-l90-rj",
    link: "/",
    album: "Single",
    explicit: true,
  },
  {
    type: "video",
    name: "joji - WORLD$TAR MONEY",
    artists: [
      {
        name: "ＴＲＡＳＨ 新 ドラゴン",
        link: "/",
      },
    ],
    image:
      "https://i.ytimg.com/vi/sADmwWhU5ZM/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nQY1TzzrAN080hAWj2_IWruZ29Ug",
    link: "/",
    views: "74M",
  },
  {
    type: "music",
    name: "DEMONS IN MY SOUL",
    artists: [
      {
        name: "SCXR SOUL",
        link: "/",
      },
      {
        name: "Sx1nxwy",
        link: "/",
      },
    ],
    image:
      "https://lh3.googleusercontent.com/U1XH8mpQPHmt-M1wcWJUYfr5fCtRSMgyVb8D6OqxDSf28bjjgN9O8QYDkTO7_F3dy-VbWqDNKhJOiB3f=w544-h544-l90-rj",
    link: "/",
    album: "Single",
    explicit: true,
  },
  {
    type: "music",
    name: "Swërved It",
    artists: [
      {
        name: "Yeat",
        link: "/",
      },
    ],
    image:
      "https://lh3.googleusercontent.com/QUFdNC0Ua3RvFSo_MvV7dxYY07C3spS8VFtbfTw4Wf-3pooy1GrEZ_DMlMk3niCkA4CrQJ0Vj5iC6f_7zg=w226-h226-l90-rj",
    link: "/",
    album: "Song",
    explicit: true,
  },
  {
    type: "music",
    name: "METAMORPHOSIS 3",
    artists: [
      { name: "INTERWORLD", link: "/" },
      { name: "zxcursed", link: "/" },
      { name: "Sadfriendd", link: "/" },
    ],
    image:
      "https://lh3.googleusercontent.com/npACGZxDWr77-RKaHUF1zbYizwSK9cysQ-WDtiM3XeUcdcIrz7QkBQXS2V7xLOrcF8eX_W2riGTxhgJ-HQ=w226-h226-l90-rj",
    link: "/",
    album: "Single",
    explicit: true,
  },
  {
    type: "video",
    name: "lana del rey - yes to heaven (intro loop 0.80x speed)",
    artists: [{ name: "Myxomatosis", link: "/" }],
    image:
      "https://i.ytimg.com/vi/9tUg46n9KPs/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lFqdzJuBvPPRuGdrg9Si3twFCQVA",
    link: "/",
    views: "12K",
  },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
</script>

<template>
  <div class="mt-4 space-y-14 ytlg:space-y-24 ytxl:space-y-28 yt2xl:space-y-32">
    <HorizontalCarousel
      :items="shuffle(carouselItems)"
      :image="{
        path: '/images/pfp.jpg',
        redirect: '/',
        alt: 'user profile picture',
        showImage: true,
        isRounded: true,
      }"
      :title="{ text: 'Listen again', link: '/' }"
      subtitle="Mehmet"
    />
    <HorizontalCarousel
      :items="shuffle(carouselItems)"
      :title="{ text: 'SHADXWBXRN', link: '/' }"
      subtitle="More From"
    />
    <HorizontalCarousel
      :items="shuffle(carouselItems)"
      :image="{
        path: 'https://lh3.googleusercontent.com/SO7gH564_3Kq9hCODuPYJVyGDNyMeH0J8u--bwcI5hSvMwulIVWtY5mJx3R0vBcqglhOU_wLa9ZIBuU=w60-h60-l90-rj',
        redirect: '/',
        alt: 'Crystal Castles',
        showImage: true,
        isRounded: true,
      }"
      :title="{ text: 'Crystal Castles', link: '/' }"
      subtitle="Similar To"
    />
    <HorizontalCarousel
      :items="shuffle(carouselItems)"
      :title="{ text: 'Mixed for you', link: '/' }"
    />
  </div>
</template>
