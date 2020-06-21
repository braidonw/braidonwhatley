<script>
  export { extraClasses as class };
  export let size = "md";
  let extraClasses = "";
  $: classes =
    "text-lg inline-flex items-center px-4 py-3 border-blue-600 border-2 text-sm leading-5 font-semibold rounded-sm text-blue-600 bg-transparent focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150";
</script>

<span class="inline-flex rounded-md shadow-sm {extraClasses}">
  <button type="button" on:click|preventDefault class={classes}>
    <slot />
  </button>
</span>
