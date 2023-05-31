<script setup>
import { OnClickOutside } from "@vueuse/components";

const query = ref(encodeURIComponent(""));
let searchResult = ref("");
async function search() {
  showSearch.value = false;
  searchResult.value = await $fetch(`/api/search?query=${query.value}&limit=7`);
}

const elementThatBeingHovered = ref("");
const showSettings = ref(false);
const showSearch = ref(false);
let scrollValue = ref(0);
let settingsMenuScrollBox = ref(null);

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

onMounted(() => {
  if (process.client) {
    function resizeSettingsMenuScrollBox() {
      settingsMenuScrollBox.value.style.maxHeight =
        window.innerHeight - 130 + "px";
    }

    function repositionSettingsMenu() {
      let settingsMenu = document.getElementById("settingsMenu").style;
      if (window.innerHeight < 580) {
        settingsMenu.top = "20px";
        settingsMenu.right = "45px";
      } else {
        settingsMenu.top = "45px";
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

function autoFocusToSearchBar(delay) {
  if (process.client && showSearch) {
    const searchBar = document.getElementById("searchBar");
    setTimeout(() => {
      searchBar.focus();
    }, delay);
  }
}
</script>

<template>
  <header
    :class="[
      scrollValue > 0
        ? 'bg-ytblack border-b border-b-[rgb(30,30,30)]'
        : 'bg-transparent border-b-transparent',
    ]"
    class="text-ytgray sticky top-0 transition-colors duration-300"
  >
    <nav class="flex justify-between items-center px-4 py-2">
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
            class="py-3 text-xl font-medium transition-colors duration-200 hover:text-white"
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
            class="ytsm:mr-10 py-3"
            to="/library"
            ><IconsLibrary :elementThatBeingHovered="elementThatBeingHovered" />
          </NuxtLink>
          <NuxtLink
            @mouseenter="elementThatBeingHovered = 'upgrade'"
            @mouseleave="elementThatBeingHovered = ''"
            class="ytsm:mr-1 py-3 max-ytsm:hidden"
            to="/upgrade"
            ><IconsUpgrade :elementThatBeingHovered="elementThatBeingHovered" />
          </NuxtLink>
        </div>
        <button
          @mouseenter="elementThatBeingHovered = 'searchBar'"
          @mouseleave="elementThatBeingHovered = ''"
          @click="
            showSearch = !showSearch;
            autoFocusToSearchBar(100);
          "
          class="flex justify-center items-center ml-5"
        >
          <IconsSearch
            wrapperElementClassList="w-12 p-3 ytmd:ml-2"
            :elementThatBeingHovered="elementThatBeingHovered"
          />
          <p
            :class="{ 'text-white': elementThatBeingHovered === 'searchBar' }"
            class="text-xl font-medium max-ytlg:hidden ml-1"
          >
            Search
          </p>
        </button>
      </div>
      <div class="flex justify-center items-center">
        <IconsCast class="max-ytsm:hidden mr-6" />
        <button @click="showSettings = !showSettings">
          <img
            src="/images/pfp.jpg"
            alt="user profile picture"
            width="26"
            height="26"
            class="border border-[#383838] rounded-full"
          />
        </button>
      </div>
    </nav>

    <OnClickOutside @trigger="showSettings = false">
      <div
        :class="[showSettings ? 'opacity-100 visible' : 'opacity-0 invisible']"
        class="transition-all duration-200"
      >
        <div
          id="settingsMenu"
          class="absolute w-[297px] bg-[#282828] text-white rounded-xl overflow-hidden"
        >
          <div class="p-4 flex space-x-4 border-b border-[#383838]">
            <img
              src="/images/pfp.jpg"
              alt="user profile picture"
              width="40"
              height="40"
              class="rounded-full max-h-10 max-w-10"
            />
            <div class="cursor-default">
              <p class="leading-5">GwynDev</p>
              <p class="mb-1">@TearsOfaPessimist</p>
              <NuxtLink to="/" class="text-[#3EA6FF] text-sm"
                >Manage your Google Account</NuxtLink
              >
            </div>
          </div>
          <div
            ref="settingsMenuScrollBox"
            class="overflow-auto text-sm scrollbarStyle"
          >
            <div class="py-2 border-b border-[#383838]">
              <NuxtLink
                class="py-2 flex items-center hover:bg-white/10"
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
                  <div class="px-4">
                    <IconRenderer :iconName="tab.icon" class="w-6" />
                  </div>
                  <p>{{ tab.text }}</p>
                </div>
                <IconsRightArrow
                  class="w-6 mr-4"
                  :class="{ hidden: settingsMenuTabs.indexOf(tab) !== 2 }"
                />
              </NuxtLink>
            </div>
            <div class="py-2">
              <NuxtLink
                class="py-2 flex items-center hover:bg-white/10"
                v-for="tab in settingsMenuTabs.filter((item) => {
                  return settingsMenuTabs.indexOf(item) > 3;
                })"
                :key="tab.text"
                :to="tab.link"
                ><div class="px-4">
                  <IconRenderer :iconName="tab.icon" class="w-6" />
                </div>
                <p>{{ tab.text }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </OnClickOutside>

    <OnClickOutside @trigger="showSearch = false">
      <div
        @keypress.enter="navigateTo(`/search/${query}`)"
        class="flex min-w-screen justify-center transition-all duration-200"
        :class="[showSearch ? 'opacity-100 visible' : 'opacity-0 invisible']"
      >
        <div
          class="w-[95%] ytsm:w-[560px] ytmd:w-[720px] ytlg:w-[870px] absolute top-2 bg-[#212121] border border-[#333] rounded-sm"
        >
          <div class="flex border-b border-[#333]">
            <button @click="showSearch = false" class="px-4">
              <IconsBackArrow />
            </button>
            <label for="searchBar" class="w-full">
              <input
                @change="search()"
                id="searchBar"
                v-model="query"
                type="text"
                class="text-xl font-medium outline-none bg-transparent text-white w-full py-2.5"
                placeholder="Search"
                autocomplete="off"
            /></label>
            <button
              v-if="query !== ''"
              @click="
                autoFocusToSearchBar(0);
                query = '';
              "
              class="transition-all duration-200 px-4"
            >
              <IconsClose />
            </button>
          </div>

          <div class="py-2">
            <NuxtLink
              :to="`/search/${query}`"
              v-for="item in searchResult?.items"
              :key="item"
              class="h-12 flex justify-between items-center hover:bg-white/10 min-w-full"
            >
              <div class="flex">
                <IconsSearch wrapperElementClassList="w-6 h-6 mx-4" />
                <p class="font-semibold line-clamp-1">
                  {{ item.title }}
                </p>
              </div>
              <!-- <IconsDelete class="w-6 mr-5" /> -->
            </NuxtLink>
          </div>
        </div>
      </div>
    </OnClickOutside>
  </header>
</template>

<style scoped>
.scrollbarStyle::-webkit-scrollbar {
  width: 8px;
  background-color: #282828;
  border: none;
}

.scrollbarStyle::-webkit-scrollbar-thumb {
  background-color: #616160;
}
</style>
