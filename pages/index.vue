<script setup>
const carouselItems = [
  {
    type: "music",
    name: "UNFAZED",
    artists: [
      {
        name: "ARXMANE",
        link: "/",
      },
    ],
    image:
      "https://lh3.googleusercontent.com/KKt33I_H9O5AnHs6i1Ey1qUcK9bzkEAx-6jap1OLkJ4dDpQvm-D9hnk_LtH-8FKwcYMVb0mplEtAz-Z2PQ=w544-h544-l90-rj",
    link: "/",
    album: "Single",
  },
  {
    type: "video",
    name: "HIT LIST",
    artists: [
      {
        name: "Pharmacist",
        link: "/",
      },
    ],
    image:
      "https://i.ytimg.com/vi/lIB9exiMDLk/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3k0b6iNayMQ9qDpqjCxsna997yOAg",
    link: "/",
    views: "144K",
  },
  {
    type: "music",
    name: "GHOST! (Sped Up)",
    artists: [
      {
        name: "phonk.me",
        link: "/",
      },
      {
        name: "KIIXSHI",
        link: "/",
      },
    ],
    image:
      "https://lh3.googleusercontent.com/jTuV7IX6XuAmqxiSW-K0l2-06QhasGdVp3yV41EJzYNRV2OnMPrvS_dnT4SOQTYkAeZ1Mp1gSjjUskDq=w544-h544-l90-rj",
    link: "/",
    album: "Single",
  },
  {
    type: "music",
    name: "Fear (Sped Up)",
    artists: [
      {
        name: "Hensonn",
        link: "/",
      },
    ],
    image:
      "https://lh3.googleusercontent.com/3ps81ZHCkeH5prAobz5gU1AAYoM6qE6g64CaF7ytcfaxbRS7d3_T7N_DkeJauhUpCNltBO-8LG1kvUCV=w544-h544-l90-rj",
    link: "/",
    album: "Song",
    explicit: true,
  },
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
    album: "Single",
  },
  {
    type: "video",
    name: "BRAINSHOT",
    artists: [
      {
        name: "Pharmacist",
        link: "/",
      },
    ],
    image:
      "https://i.ytimg.com/vi/gailByDebJc/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mrdjDWQz_E1wEw7-Dggm6J9LJ6lg",
    link: "/",
    views: "230K",
  },
  {
    type: "music",
    name: "Spacey supp",
    artists: [
      {
        name: "Hensonn",
        link: "/",
      },
    ],
    image:
      "https://lh3.googleusercontent.com/xX1ZX4MUV7Gl6p9HkoEFZQAsafwaJB1VwDorEjp106wl1LTAMoMYEIw-cm392nMMTHVLI8M9A0x1iWie=w544-h544-l90-rj",
    link: "/",
    album: "Single",
    explicit: true,
  },
  {
    type: "music",
    name: "hotline bling (billie version)",
    artists: [
      {
        name: "hazel & instrumental version",
        link: "/",
      },
    ],
    image:
      "https://lh3.googleusercontent.com/QEbU6zBoCgjoNtfnHWp5rP3uJRAE_is9_aRpulOOhDgMbl3dw44pOI5XBa3BcbHlBKc3yBxkPXYn6M8=w226-h226-l90-rj",
    link: "/",
    album: "Song",
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
      "https://i.ytimg.com/vi/TkWjvgzu6Os/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nMPhA3lRQ0NqEshikdHgKzzx5kIg",
    link: "/",
    views: "12K",
  },
];
</script>

<template>
  <div class="mt-4 space-y-14 ytlg:space-y-24 ytxl:space-y-28 yt2xl:space-y-32">
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
      :showMore="true"
    />
    <HorizontalCarousel
      :items="carouselItems"
      :title="{ text: 'Quick picks', link: '/' }"
      subtitle="Start Radio From A Song"
      :isCompact="true"
    />
    <HorizontalCarousel
      :items="carouselItems"
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
      :items="carouselItems"
      :title="{ text: 'Mixed for you', link: '/' }"
      :showMore="true"
    />
  </div>
</template>
