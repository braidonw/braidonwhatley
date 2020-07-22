<script>
  export let weight = "md";

  let classLookup = {
    sm: "text-lg text-gray-700 font-normal",
    md: "text-2xl text-gray-800 font-normal",
  };

  $: textClasses = classLookup[weight];
</script>

<span class={textClasses}>
  <slot />
</span>
