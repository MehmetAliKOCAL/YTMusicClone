<script setup>
const showSettings = ref(false);
const elementThatBeingHovered = ref("");
let scrollValue = ref(0);

const headerTabs = [
  {
    text: "Home",
    link: "/",
    icon: "home",
  },
  {
    text: "Explore",
    link: "/explore",
    icon: "explore",
  },
  {
    text: "Library",
    link: "/library",
    icon: "library",
  },
  {
    text: "Upgrade",
    link: "/upgrade",
    icon: "upgrade",
  },
];

const settingsMenuTabs = [
  {
    text: "Your channel",
    link: "/",
    icon: "yourChannel",
  },
  {
    text: "Get Music Premium",
    link: "/",
    icon: "getMusicPremium",
  },
  {
    text: "Switch account",
    link: "/",
    icon: "switchAccount",
  },
  {
    text: "Sign out",
    link: "/",
    icon: "signOut",
  },
  {
    text: "Upload music",
    link: "/",
    icon: "uploadMusic",
  },
  {
    text: "History",
    link: "/",
    icon: "history",
  },
  {
    text: "Settings",
    link: "/",
    icon: "settings",
  },
  {
    text: "Terms & privacy policy",
    link: "/",
    icon: "termsAndPrivacy",
  },
  {
    text: "Help",
    link: "/",
    icon: "help",
  },
  {
    text: "Send feedback",
    link: "/",
    icon: "sendFeedback",
  },
];

onBeforeMount(() => {
  if (process.client) {
    function resizeSettingsMenuScrollBox() {
      let settingsMenuScrollBox = document.getElementById(
        "settingsMenuScrollBox"
      ).style;
      settingsMenuScrollBox.maxHeight = window.innerHeight - 120 + "px";
    }

    function repositionSettingsMenu() {
      let settingsMenu = document.getElementById("settingsMenu").style;
      if (window.innerHeight < 580) {
        settingsMenu.top = "20px";
        settingsMenu.right = "45px";
      } else {
        settingsMenu.top = "40px";
        settingsMenu.right = "16px";
      }
    }

    resizeSettingsMenuScrollBox();
    repositionSettingsMenu();

    window.addEventListener("scroll", () => {
      scrollValue.value = window.scrollY;
    });

    window.addEventListener("resize", () => {
      resizeSettingsMenuScrollBox();
      repositionSettingsMenu();
    });
  }
});
</script>

<template>
  <header
    :class="[
      scrollValue > 0
        ? 'bg-ytblack border-b border-b-[rgb(30,30,30)]'
        : 'bg-transparent border-b-transparent',
    ]"
    class="text-ytgray px-4 py-1 sticky top-0 transition-colors duration-300"
  >
    <nav class="flex justify-between items-center py-1">
      <NuxtLink to="/"><IconsLogo /></NuxtLink>
      <div class="flex justify-center items-center ml-2">
        <div class="max-ytmd:hidden">
          <NuxtLink
            v-for="tab in headerTabs"
            :key="tab.text"
            :to="tab.link"
            :class="{
              'text-white': useRoute().path === tab.link,
              'mr-10 ytlg:mr-12': tab.text !== 'Upgrade',
            }"
            class="py-3 text-xl font-medium transition-colors duration-200 font-robotoExt hover:text-white"
            >{{ tab.text }}</NuxtLink
          >
        </div>
        <div class="ytmd:hidden flex">
          <NuxtLink
            @mouseenter="elementThatBeingHovered = 'home'"
            @mouseleave="elementThatBeingHovered = ''"
            class="ytsm:mr-10 mr-8 py-3"
            to="/"
            ><IconsHome :elementThatBeingHovered="elementThatBeingHovered" />
          </NuxtLink>
          <NuxtLink
            @mouseenter="elementThatBeingHovered = 'explore'"
            @mouseleave="elementThatBeingHovered = ''"
            class="ytsm:mr-10 mr-8 py-3"
            to="/explore"
            ><IconsExplore :elementThatBeingHovered="elementThatBeingHovered" />
          </NuxtLink>
          <NuxtLink
            @mouseenter="elementThatBeingHovered = 'library'"
            @mouseleave="elementThatBeingHovered = ''"
            class="ytsm:mr-10 mr-8 py-3"
            to="/library"
            ><IconsLibrary :elementThatBeingHovered="elementThatBeingHovered" />
          </NuxtLink>
          <NuxtLink
            @mouseenter="elementThatBeingHovered = 'upgrade'"
            @mouseleave="elementThatBeingHovered = ''"
            class="ytsm:mr-1 py-3"
            to="/upgrade"
            ><IconsUpgrade :elementThatBeingHovered="elementThatBeingHovered" />
          </NuxtLink>
        </div>
        <button
          @mouseenter="elementThatBeingHovered = 'search'"
          @mouseleave="elementThatBeingHovered = ''"
          class="flex justify-center items-center ml-5"
        >
          <IconsSearch :elementThatBeingHovered="elementThatBeingHovered" />
          <p
            :class="{ 'text-white': elementThatBeingHovered === 'search' }"
            class="text-xl font-medium font-robotoExt max-ytlg:hidden ml-1"
          >
            Search
          </p>
        </button>
      </div>
      <div class="flex space-x-5 justify-center items-center">
        <IconsCast />
        <button @click="showSettings = !showSettings">
          <img
            src="/images/pfp.jpg"
            alt="user profile picture"
            width="26"
            class="ml-1 border border-[#383838] rounded-full"
          />
        </button>
      </div>
    </nav>
    <div
      :class="[showSettings ? 'opacity-100 visible' : 'opacity-0 invisible']"
      class="transition-all duration-200"
    >
      <button
        @click="showSettings = !showSettings"
        class="absolute min-w-[calc(100vw-28px)] min-h-[100vh] cursor-default"
      />
      <div
        id="settingsMenu"
        class="absolute w-[297px] bg-[#232424] border-b border-x border-[#383838] text-white"
      >
        <div class="bg-[#191a1a] p-4 flex space-x-4 border-b border-[#383838]">
          <img
            src="/images/pfp.jpg"
            alt="user profile picture"
            width="40"
            height="40"
            class="rounded-full max-h-10 max-w-10"
          />
          <div class="cursor-default">
            <p class="leading-4">Mehmet</p>
            <p>@TearsOfaPessimist</p>
            <NuxtLink to="/" class="text-[#3FA7FF] text-sm"
              >Manage your Google Account</NuxtLink
            >
          </div>
        </div>
        <div id="settingsMenuScrollBox" class="overflow-auto text-sm scrollbar">
          <div class="py-2 border-b border-[#383838]">
            <NuxtLink
              class="px-4 py-2 flex items-center hover:bg-white/10"
              :class="{
                'justify-between ': settingsMenuTabs.indexOf(tab) === 2,
              }"
              v-for="tab in settingsMenuTabs.filter((item) => {
                return settingsMenuTabs.indexOf(item) < 4;
              })"
              :key="tab.text"
              :to="tab.link"
            >
              <div class="flex items-center">
                <IconRenderer :iconName="tab.icon" class="w-6 mr-3" />
                <p>{{ tab.text }}</p>
              </div>
              <IconsRightArrow
                class="w-6"
                :class="{ hidden: settingsMenuTabs.indexOf(tab) !== 2 }"
              />
            </NuxtLink>
          </div>
          <div class="py-2">
            <NuxtLink
              class="px-4 py-2 flex items-center hover:bg-white/10"
              v-for="tab in settingsMenuTabs.filter((item) => {
                return settingsMenuTabs.indexOf(item) > 3;
              })"
              :key="tab.text"
              :to="tab.link"
            >
              <IconRenderer :iconName="tab.icon" class="w-6 mr-3" />
              <p>{{ tab.text }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
