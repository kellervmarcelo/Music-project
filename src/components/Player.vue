<template>
  <!-- Player -->
  <div
    class="fixed bottom-0 left-0 bg-white p-5 pb-4 text-left align-top w-full h-16 "
  >
    <div class="relative">
      <!-- Play/Pause Button -->
      <div class="float-left w-7 h-7 leading-3">
        <button type="button" @click.prevent="toggleAudio" data-cy="pause">
          <i
            class="fa text-gray-500 text-xl"
            :class="{ 'fa-play': !playing, 'fa-pause': playing }"
          ></i>
        </button>
      </div>
      <!-- Current Position -->
      <div
        class="float-left w-7 h-7 leading-3 text-gray-400 flex items-center text-lg w-14 ml-5 "
      >
        <span class="player-currenttime">{{ seek }}</span>
      </div>
      <!-- Scrub -->
      <div class="float-left w-7 h-7 leading-3 ml-7 mt-2 player-scrub">
        <div
          class="absolute left-0 right-0 text-lg text-center mx-auto player-song-info"
          v-if="currentSong.modified_name"
        >
          <span class="song-title">{{ currentSong.modified_name }}</span>
          <span class="song-artist">
            (Uploaded by {{ currentSong.display_name }})
          </span>
        </div>
        <!-- Scrub Container  -->
        <span
          class="block w-full h-2 rounded m-1 mt-2 bg-gray-200 relative cursor-pointer"
          @click.prevent="updateSeek"
        >
          <!-- Player Ball -->
          <span
            class="absolute top-neg-8 text-gray-800 text-lg"
            :style="{ left: playerProgress }"
          >
            <i class="fas fa-circle"></i>
          </span>
          <!-- Player Progres Bar -->
          <span
            class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
            :style="{ width: playerProgress }"
          ></span>
        </span>
      </div>
      <!-- Duration -->
      <div
        class="float-left w-7 h-7 leading-3 text-gray-400 mt-0 text-lg w-14 ml-8 mt-1"
      >
        <span class="player-duration">{{ duration }}</span>
      </div>
      <!-- Volume -->
      <div>
        <i
          class="cursor-pointer p-1"
          @mouseover="showVolumeModal"
          @mouseleave="hideVolumeModal"
          @click="muteVolume"
          :class="mute ? 'fas fa-volume-off' : 'fas fa-volume-up'"
        ></i>
      </div>
    </div>
    <teleport to="#modals">
      <div
        v-if="isVolumeModalOpen"
        @click="clickedOutside"
        class="bg-white p-4 right-4 bottom-14 z-50 shadow-sm fixed flex gap-4"
      >
        <button @click="updateVolume">
          <i class="fas fa-plus text-pink-400"></i>
        </button>
        <button>
          <i class="fas fa-minus text-pink-400"></i>
        </button>
      </div>
    </teleport>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Player',
  data() {
    return {
      isVolumeModalOpen: false,
      mute: false,
    };
  },
  computed: {
    ...mapGetters(['playing']),
    // ['seek', 'duration', 'playerProgress', 'currentSong']
    ...mapState({
      seek: (state) => state.player.seek,
      duration: (state) => state.player.duration,
      playerProgress: (state) => state.player.playerProgress,
      currentSong: (state) => state.player.currentSong,
    }),
  },
  methods: {
    ...mapActions(['toggleAudio', 'updateSeek', 'muteVolume', 'updateVolume']),
    showVolumeModal() {
      this.isVolumeModalOpen = true;
    },
    hideVolumeModal() {
      this.isVolumeModalOpen = false;
    },
  },
};
</script>
