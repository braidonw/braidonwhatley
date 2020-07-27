<script>
  import { goto } from "@sapper/app";
  import { scrollTo } from "lib/utils";
  export let url = undefined;
  export let identifier = undefined;

  function nav() {
    if (url) {
      return goto(url);
    } else if (identifier) {
      scrollTo(identifier);
    }
  }
</script>

<button
  on:click={nav}
  class="text-lg leading-6 font-medium text-gray-800 hover:text-gray-900
  focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
  <slot />
</button>
