<script>
  export let url;
</script>

<a
  href={url}
  class="text-lg leading-6 font-medium text-gray-800 hover:text-gray-900
  focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
  <slot />
</a>
