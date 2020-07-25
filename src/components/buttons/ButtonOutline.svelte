<script>
  export { extraClasses as class };
  export let size = "md";
  let extraClasses = "";
  $: classes =
    "text-2xl inline-flex items-center px-2 py-2 text-sm leading-5 font-bold rounded-sm bg-transparent focus:outline-none focus:border-blue-700 active:bg-blue-50 transition ease-in-out duration-150";

  $: borderClasses = "border-blue-600 border-b-4 text-blue-600 ";

  $: hoverClasses = "hover:border-blue-800 hover:text-blue-800";
</script>

<span class="inline-flex {extraClasses} {borderClasses} {hoverClasses}">
  <button type="button" on:click|preventDefault class={classes}>
    <slot />
  </button>
</span>
