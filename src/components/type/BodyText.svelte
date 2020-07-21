<script>
  export let weight = "md";

  let classLookup = {
    md: "text-2xl text-gray-800 font-normal"
  };

  $: textClasses = classLookup[weight];
</script>

<span class={textClasses}>
  <slot />
</span>
