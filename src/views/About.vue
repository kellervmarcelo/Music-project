<template>
  <div class="flex justify-items-center flex-col items-center mt-16">
    <img src="../assets/foto.jpg" alt="photo" class="rounded-full text-center max-w-xs w-52">
    <h1 class="text-center mt-8 text-2xl font-bold text-pink-400">{{ $t('about.whoami')}}</h1>
    <p class="text-center px-16 mt-4 max-w-3xl">{{ $t('about.presentation') }}</p>
    <div class="text-center mt-4">
      <a href="https://www.linkedin.com/in/kellervmarcelo/" target="_blank">
        <i class="fab fa-linkedin-in mr-8"></i>
      </a>
      <a href="https://twitter.com/mkvmarcelo" target="_blank">
        <i class="fab fa-twitter mr-8"></i>
      </a>
      <a href="https://github.com/kellervmarcelo" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</template>

<!-- <script>
import dummyModule from '@/store/modules/dummy';

export default {
  created() {
    this.$store.registerModule('dummy', dummyModule);
  },
};
</script> -->
