<template>
  <main>
    <header class="">
      <h1 class="text-3xl mt-8 font-semibold text-center pb-3">
        <span class="text-blue-600">MacroHub LCC</span>
      </h1>
    </header>
    <div
      class="mt-3 mb-3 sm:text-5xl text-2xl text-gray-600 text-center font-light"
    >
      We are launching <span class="font-semibold text-black">soon!</span>
    </div>
    <strong><p class="text-center mb-4">{{ timerText }}</p></strong>

    <!-- <div class="text-xl text-center">Subscribe and get notified</div> -->

    <!-- <form
      class="flex flex-col sm:flex-row sm:ml-20 mx-4 sm:pl-20 my-4"
      id="newsletterForm"
      action="process.php"
      method="post"
    >
      <input
        type="text"
        name="email"
        id="email"
        class="border px-4 py-2 rounded-full w-full sm:w-2/4 mb-2 sm:m-0 outline-none"
        placeholder="Your email Address"
      />
      <input
        type="submit"
        id="submitBtn"
        class="cursor-pointer p-2 rounded-full w-full shadow-lg bg-blue-600 ml-0 text-gray-100 sm:ml-3 sm:w-1/4"
        value="Notify Me"
      />
    </form> -->

    <footer class="float-right mt-5 fixed bottom-0" style="width: 100%">
      <div class="p-4 mt-3 text-center">
        <p class="text-center">
          &copy; Copyright
          <a href="https://macrohub.net">MacroHub LLC</a>
          All rights reserved.
        </p>
      </div>
    </footer>
  </main>
</template>

<script lang="ts">

export default defineComponent({
  name: "Index",
  
  setup() {
    const timer = ref(0);
    const timerText = ref('');
    const countDownDate = new Date("Oct 31, 2024 00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      timer.value = countDownDate - now;

      const days = Math.floor(timer.value / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timer.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timer.value % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timer.value % (1000 * 60)) / 1000);

      timerText.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    let intervalId: number;

    onMounted(() => {
      updateTimer();
      intervalId = setInterval(updateTimer, 1000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return { timerText };
  },
});
</script>
